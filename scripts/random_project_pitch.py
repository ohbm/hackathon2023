import random
import yaml


def random_project_pitch():
    with open('./_data/projects.yml') as f:
        issues_list = yaml.safe_load(f)
    project_by_hub = {
        'multi':{
            'Americas':[],
            'Non-Americas':[]
            },
        'Glasgow':[],
        'Americas':[],
        'Europe / Middle East / Africa':[],
        'Asia / Pacific':[]
    }

    for issue in issues_list:
        hub = issue['hub']
        title = issue['title']
        other = issue.get('otherhub', False)
        if not other:
            project_by_hub[hub].append(issue['title'])
        elif 'Americas' in other:
            project_by_hub['multi']['Americas'].append(title)
        elif hub == 'Glasgow' and 'Europe / Middle East / Africa' in other:
            project_by_hub[hub].append(issue['title'])
        else:
            project_by_hub['multi']['Non-Americas'].append(title)

    random.Random(42).shuffle(project_by_hub['Glasgow'])
    with open('./_data/pitch_order.yml', 'w') as f:
        yaml.dump(project_by_hub, f, default_flow_style=False, sort_keys=False)

if __name__ == '__main__':
    random_project_pitch()
