#!/bin/env python
import os
import re
import requests
import yaml
import json

def fetch_gh_issues():

    GH_AUTH = os.environ['GH_AUTH']
    REPO = 'ohbm/hackathon2023'
    ISSUE_LABEL = 'Hackathon Project'
    ISSUE_READY_LABEL = 'Good to go'
    ISSUE_FILTER = f'labels={ISSUE_LABEL}&per_page=100'
    ISSUE_FILTER = f'per_page=100'
    URL = f'https://{GH_AUTH}@api.github.com/repos/{REPO}/issues?{ISSUE_FILTER}'

    with open('.github/ISSUE_TEMPLATE/hackathon-project-form.yml') as f:
        issue_form = yaml.safe_load(f)

    fields = issue_form['body']
    fields = [f for f in fields if f['type'] != 'markdown']

    res = requests.get(URL)
    issues = res.json()
    issues_list = []
    for issue in issues:
        if ISSUE_READY_LABEL not in [i['name'] for i in issue["labels"]]:
            continue

        if issue["state"] != "open":
            continue

        body = issue["body"]
        lines = [l.strip() for l in body.replace('\r\n', '\n').split('\n')]

        field_ordering = []
        for field in fields:
            field_start = None
            field_label = field['attributes']['label']

            for li, line in enumerate(lines):
                is_line_title = line.startswith(f'### {field_label}')
                if field_start is None and is_line_title:
                    field_start = li

            field_ordering += [(field, field_start)]
        field_ordering = list(sorted(field_ordering, key=lambda f: f[1]))

        issue_info = {}

        field_bounds = zip(field_ordering, field_ordering[1:] + [(None, None)])
        for (field, i), (_, ni) in field_bounds:
            field_id = field['id']
            field_label = field['attributes']['label']

            if i is None:
                issue_info[field_id] = None
                continue

            field_value = '\n'.join(filter(None, lines[i+1:ni]))
            field_value = re.sub(
                r'<!--.*?-->', '', field_value,
                flags=re.DOTALL
            )
            field_value = field_value.strip()

            if field_value == '_No response_':
                field_value = None

            if field['type'] == 'checkboxes':
                field_options_labels = [
                    o['label'].strip()
                    for o in field['attributes']['options']
                ]
                field_selected_options = []
                field_options_value = field_value.split('\n')
                for l in field_options_value:
                    if l[6:] not in field_options_labels:
                        continue
                    if l.startswith('- [X] '):
                        field_selected_options.append(l[6:])
                    if l.startswith('- [x] '):
                        field_selected_options.append(l[6:])

                field_value = field_selected_options

            issue_info[field_id] = field_value

        if issue_info['hub'] in issue_info['otherhub']:
            issue_info['otherhub'].remove(issue_info['hub'])

        issue_info['issue_link'] = issue["html_url"]
        issue_info['issue_number'] = issue["number"]
        issues_list.append(issue_info)

    with open('./public/projects.json', 'w') as f:
        json.dump(issues_list, f, indent=2)


if __name__ == '__main__':
    from dotenv import load_dotenv
    load_dotenv()

    fetch_gh_issues()
