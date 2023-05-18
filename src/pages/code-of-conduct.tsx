export async function getStaticProps() {
  return { props: { bodyClassName: 'jungle no-jungle' } }
}

export default function Schedule() {
  return (
    <>
      <main className="code-of-conduct">
        <h2 className="flex justify-center pt-36 pb-20 px-6 md:px-0 text-sand-dark dirt">
         Code of Conduct
        </h2>

        <div className="bg-sand flex items-center justify-center py-0">
          <div className="max-w-6xl m-12 mt-0 md:m-16 md:mt-0 text-xl">
            <h3>Introduction</h3>
            <p>This Code of Conduct applies to all event venues and online activities managed by the Organization for Human Brain Mapping (OHBM) including the annual meeting, afternoon and evening social events, and online content posted under OHBM hash tags. We expect our Code of Conduct to be honored by everyone who participates in the OHBM community formally or informally or claims any affiliation with OHBM. This code is not exhaustive or complete. We ask community members to adhere to it as much in spirit as in letter to create a safe and positive experience for all.</p>

            <h3>Diversity Statement</h3>
            <p>The Organization for Human Brain Mapping (OHBM) is an international community of researchers devoted to understanding the structure and function of the human brain, an incredibly complex and diverse entity. As an organization, OHBM strongly values diversity in its membership. OHBM is therefore committed to creating an equitable environment where human diversity is welcomed and respected. While no list can hope to be comprehensive, we explicitly honor diversity in: age, culture, ethnicity, gender identity or expression, language, national origin, political beliefs, profession, race, religion, sexual orientation, and socioeconomic status.</p>

            <h3>Promoting Diversity</h3>
            <p>In both public and private interactions, OHBM expects its members to be respectful of all community voices. Conversations should be direct, constructive, and positive. We expect members to respect and honor all forms of diversity. Community members are also encouraged to seek diverse perspectives. As an organization, we will work to ensure that our leadership council, symposia and keynote speakers, committee members, and SIGs reflect the diversity of OHBM.</p>

            <h3>Appreciating Differences</h3>
            <p>OHBM members come from many cultures and backgrounds. We therefore expect community members to be respectful of different cultural practices, attitudes, and beliefs. This includes being aware of preferred titles and pronouns, as well as using a respectful tone of voice.</p>
            <p>While we do not assume OHBM members know the cultural practices of every ethnic and cultural group, we expect members to recognize and appreciate differences within our community. This means being open to learning from and educating others, as well as educating yourself.</p>

            <h3>Behavior That Will Not Be Tolerated</h3>
            <p>OHBM stands against discrimination in all forms and at every organizational level. Discrimination based on, but not limited to geographic location, gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, accent, race, ethnicity, age or religion does not abide by OHBM’s values. We do not tolerate discrimination or harassment of conference participants and organizers.</p>
            <p>Harassment includes, but is not limited to:</p>
            <ul>
              <li>Verbal comments that reinforce social structures of dominance related to geographic location, gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion.</li>
              <li>Unwelcome comments regarding a person’s lifestyle choices and practices, including those related to food, health, parenting, drugs, and employment.</li>
              <li>Sexual images in public spaces, including talks and advertisements by sponsors / booths.</li>
              <li>Deliberate intimidation, stalking, or following</li>
              <li>Harassing photography or recording, including logging online activity for harassment purposes and all forms of cyberbullying</li>
              <li>Sustained disruption of talks or other events</li>
              <li>Inappropriate physical contact</li>
              <li>Unwelcome sexual attention</li>
              <li>Advocating for, or encouraging, any of the above behaviour</li>
            </ul>
            
            <h3>Enforcement</h3>
            <p>OHBM expects participants to follow the rules listed above at all event venues and event-related social and online activities. Participants asked to stop any harassing behavior are expected to comply immediately. If a participant engages in harassing behavior, event organizers retain the right to take any actions to keep the event a welcoming environment for all participants. Potential actions includes, but are not limited to: warning the offender, expulsion from the specific event, or immediate expulsion from the conference [with no refund]. Event organizers may take action to redress anything designed to disrupt the event or making the environment hostile for any participants. OHBM reserves the right to report incidences of sexual misconduct to the home institution of the offender and they may take any appropriate actions.</p>

            <h3>Reporting</h3>
            <p>If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible to the OHBM Executive Director and/or the OHBM Chair whose contact information can be found on the OHBM website at www.humanbrainmapping.org. Harassment reduces the value of our community for everyone. You can make a report either personally or anonymously.</p>

            <h3>Anonymous report</h3>
            <p>You can make an anonymous report by completing this web page hosted by the OHBM Executive Office. We cannot follow up an anonymous report with you directly, but we will investigate it to the best of our ability and take whatever action is necessary to prevent a recurrence.</p>

            <h3>Personal report</h3>
            <p>You can make a personal report by:</p>
            <ul>
              <li>Calling or messaging the OHBM Executive Office at +1 612-749-1154.</li>
              <li>Contacting a member of OHBM’s Executive Office identified by staff ribbon on their badges or located behind the registration desk at the Annual Meeting.</li>
              <li>Completing the web form described above.</li>
            </ul>
            <p>When taking a personal report, individuals from the Diversity and Gender team will endeavor to use a location that is safe and private. We may involve event staff to ensure your report is managed properly. Once safe, we will ask you to tell us about what happened. This can be upsetting, but we will handle it with kindness and respect, and you can bring someone to support you. You will not be asked to confront anyone, and we will not reveal your identity. Your report will be treated confidentially and will be investigated to the best of our ability and we will take whatever action possible to prevent a recurrence.</p>
            <p>Our team will be happy to help you contact hotel/venue security, local law enforcement, local support services, and to otherwise assist you to feel safe for the duration of the event. We value your attendance.</p>

            <h3>Acknowledgements</h3>
            <p>This statement has drawn material from the <a href="https://geekfeminism.wikia.org/wiki/Conference_anti-harassment/Policy">Ada Initiative Code of Conduct</a>, the <a href="https://www.apache.org/foundation/policies/conduct.html">Apache Software Foundation Code of Conduct</a>, and the <a href="https://www.mozilla.org/en-US/about/governance/policies/participation/">Mozilla Community Participation Guidelines</a>.</p>
          </div>
        </div>
      </main>
    </>
  )
}
