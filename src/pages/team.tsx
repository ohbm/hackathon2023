import TeamMember from '@/components/team-member'

import YufangYang from '../../public/team/yufang-yang.png'
import AnibalSolon from '../../public/team/ani.png'
import AndreaGondova from '../../public/team/andrea-gondova.png'
import XinhuiLi from '../../public/team/xinhui-li.png'
import SuamiRocha from '../../public/team/suami-rocha.png'
import QingWang from '../../public/team/qing-wang.png'
import BrunoHeblingVieira from '../../public/team/bruno-hebling-vieira.png'
import SinaMansourL from '../../public/team/sina-mansour-l.png'
import BeauHaugen from '../../public/team/beau-haugen.png'
import Image from 'next/image'

import getConfig from 'next/config'
const {
  publicRuntimeConfig: {
    OSSIG_URL,
  }
} = getConfig()

export async function getStaticProps() {
  return { props: { bodyClassName: 'jungle full-jungle fixed-jungle' } }
}

export default function Schedule() {
  return (
    <main>
      <div className="text-sand-light flex flex-col items-center">
        <h2>
          Team
        </h2>
        <div className="grid grid-cols-2 gap-2 md:gap-12 lg:gap-12 max-w-5xl mt-12">
          <TeamMember
            circle="circle-1"
            size={1}
            name="Yu-Fang Yang"
            photo={YufangYang.src}
            place="Berlin, Germany"
            social={{
              twitter: "ufangyang",
              github: "ufangYang",
            }}
          />
          <TeamMember
            circle="circle-2"
            size={1}
            name="Anibal Sólon"
            photo={AnibalSolon.src}
            place="Austin, USA"
            social={{
              twitter: "anibalsolon",
              github: "anibalsolon",
            }}
          />
        </div>

        <div className="flex flex-wrap max-w-5xl mt-12 justify-center">
          <TeamMember
            className="mt-4 w-1/2 lg:w-1/3"
            circle="circle"
            size={2}
            name="Andrea Gondova"
            photo={AndreaGondova.src}
            place="Paris, France"
            social={{
              twitter: "reaGondova",
              github: "AdaGondova",
            }}
          />
          <TeamMember
            className="mt-4 w-1/2 lg:w-1/3"
            circle="circle"
            size={2}
            name="Xinhui Li"
            photo={XinhuiLi.src}
            place="Atlanta, USA"
            social={{
              twitter: "xin_hui_li",
              github: "XinhuiLi",
            }}
          />
          <TeamMember
            className="mt-4 w-1/2 lg:w-1/3"
            circle="circle"
            size={2}
            name="Suami Rocha"
            photo={SuamiRocha.src}
            place="Belém, Brazil"
            social={{
              twitter: "suamirochadev",
              github: "suamirocha",
            }}
          />
          <TeamMember
            className="mt-4 w-1/2 lg:w-1/3"
            circle="circle"
            size={2}
            name="Qing (Vincent) Wang"
            photo={QingWang.src}
            place="Montreal, Canada"
            social={{
              twitter: "QingWan99752335",
              github: "Vincent-wq",
            }}
          />
          <TeamMember
            className="mt-4 w-1/2 lg:w-1/3"
            circle="circle"
            size={2}
            name="Bruno Hebling Vieira"
            photo={BrunoHeblingVieira.src}
            place="Zurich, Switzerland"
            social={{
              twitter: "HeblingVieira",
              github: "bhvieira",
            }}
          />
          <TeamMember
            className="mt-4 w-1/2 lg:w-1/3"
            circle="circle"
            size={2}
            name="Sina Mansour L"
            photo={SinaMansourL.src}
            place="Melbourne, Australia"
            social={{
              twitter: "Sina_Mansour_L",
              github: "sina-mansour",
            }}
          />
          &nbsp;
          <TeamMember
            className="mt-4 w-1/2 lg:w-1/3"
            circle="circle"
            size={2}
            name="Beau Haugen"
            photo={BeauHaugen.src}
            place="Minneapolis, United States"
            social={{
              twitter: "OHBM",
            }}
          />
        </div>

        <h2 className="max-w-5xl p-4 mt-16 ">
          <Image
            fill
            src="https://ossig.netlify.app/images/logos/ossig_logo.svg"
            alt="OSSIG logo"
            className="object-contain max-h-24 !relative" />
        </h2>

        <div className="max-w-5xl p-4 md:text-2xl">
          <p>The <a href={OSSIG_URL}>OHBM Open Science SIG</a> mission is to advance neuroimaging research by fostering the open sharing of ideas, data, and tools between members of the OHBM community. This will be accomplished by organizing educational events, supporting collaborative initiatives, and providing mentorship to junior researchers.As with previous years, our three main contributions to the OHBM annual meetings are:</p>
          <ul className="pl-6">
            <li>organizing a Brainhack to precede the annual meeting</li>
            <li>introducing the tools of open science via interactive tutorials as part of the TrainTrack</li>
            <li>facilitating collaborative work on a wide range of open science projects</li>
          </ul>
        </div>

        <div className="flex flex-wrap max-w-5xl mt-12 justify-center">
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Koen Haak" photo="https://ossig.netlify.app/images/illustrations/faces/2023/koen_haak1.jpg" place="Chair" social={{ twitter: "https://twitter.com/KVHaak" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Andrea Gondova" photo="https://ossig.netlify.app/images/illustrations/faces/2023/gondova_andrea1.jpg" place="Secretary" social={{ twitter: "https://twitter.com/reaGondova" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Linden Parkes" photo="https://ossig.netlify.app/images/illustrations/faces/2023/linden_parkes1.jpg" place="Treasurer" social={{ twitter: "https://twitter.com/LindenParkes" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Yu-Fang Yang" photo="https://ossig.netlify.app/images/illustrations/faces/2023/yufang_yang1.jpg" place="Hackathon Co-Chair" social={{ twitter: "https://twitter.com/ufangyang" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Anibal Solon" photo="https://ossig.netlify.app/images/illustrations/faces/2023/anibal_solon1.jpg" place="Hackathon Co-Chair" social={{ twitter: "https://twitter.com/anibalsolon" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Subapriya Suppiah" photo="https://ossig.netlify.app/images/illustrations/faces/2023/subapriya_suppiah1.jpg" place="OSR Co-Chair" social={{ twitter: "https://twitter.com/SubapriyaSuppi1" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Selma Lugtmeijer" photo="https://ossig.netlify.app/images/illustrations/faces/2023/selma_lugtmeijer1.jpg" place="OSR Co-Chair" social={{ twitter: "https://twitter.com/LugtmeijerSelma" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Junhao Wen (Hao)" photo="https://ossig.netlify.app/images/illustrations/faces/2023/junhao_wen1.jpg" place="Hybridization Chair" social={{ twitter: "https://twitter.com/JunhaoWen" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Fernando Barrios" photo="https://ossig.netlify.app/images/illustrations/faces/2023/fernando_barrios1.jpg" place="Inclusivity Officer" social={{ twitter: "https://twitter.com/" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Kangjoo Lee" photo="https://ossig.netlify.app/images/illustrations/faces/2023/kangjoo_lee1.jpg" place="Inclusivity Officer" social={{ twitter: "https://twitter.com/Kangjoo_Lee_" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Nur Nabila" photo="https://ossig.netlify.app/images/illustrations/faces/2023/nur_nabila1.jpg" place="Community Liason Officer" social={{ twitter: "https://twitter.com/" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Almudena Haro" photo="https://ossig.netlify.app/images/illustrations/faces/2023/almudena_ramirez_haro1.jpg" place="Community Liason Officer" social={{ twitter: "https://twitter.com/" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Nils Muhlert" photo="https://ossig.netlify.app/images/illustrations/faces/2023/nils_muhlert1.jpg" place="Chair Elect" social={{ twitter: "https://twitter.com/nilsmuhlert" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Subapriya Suppiah" photo="https://ossig.netlify.app/images/illustrations/faces/2023/subapriya_suppiah1.jpg" place="Secretary Elect" social={{ twitter: "https://twitter.com/SubapriyaSuppi1" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Yi-Ju Lee (Jean)" photo="https://ossig.netlify.app/images/illustrations/faces/2023/yiju_lee1.jpg" place="Treasurer Elect" social={{ twitter: "https://twitter.com/jean890203" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Qing Wang (Vincent)" photo="https://ossig.netlify.app/images/illustrations/faces/2023/qing_wang1.jpg" place="Hackathon Co-Chair Elect" social={{ twitter: "https://twitter.com/QingWan99752335" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Sina Mansour" photo="https://ossig.netlify.app/images/illustrations/faces/2023/sina_mansour1.jpg" place="Hackathon Co-Chair Elect" social={{ twitter: "https://twitter.com/" }} />
          <TeamMember className="mt-4 w-1/2 lg:w-1/3" circle="circle" size={2} name="Xiangzhen Kong" photo="https://ossig.netlify.app/images/illustrations/faces/2023/xiangzhen_kong1.jpg" place="OSR Co-Chair Elect" social={{ twitter: "https://twitter.com/xiangzhenkong" }} />
        </div>
      </div>
    </main>
  )
}
