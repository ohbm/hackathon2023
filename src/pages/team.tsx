import TeamMember from "@/components/team-member";

export default function Schedule() {
  return (
    <main className="bg-almost-black jungle">
      <div className="text-sand-light flex flex-col gap-8 items-center py-16">
        <h2>
          Team
        </h2>
        <div className="flex flex-col md:flex-row gap-16 md:gap-8 lg:gap-12 items-center justify-center">
          <TeamMember
            circle="circle-1"
            size={1}
            name="Yu-Fang Yang"
            photo="yufang-yang"
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
            photo="ani"
            place="Austin, USA"
            social={{
              twitter: "anibalsolon",
              github: "anibalsolon",
            }}
          />
        </div>

        <div className="flex flex-wrap flex-col md:flex-row gap-16 md:gap-8 justify-evenly lg:gap-12 max-w-4xl items-center mt-12">
          <TeamMember
            circle="circle"
            size={2}
            name="Andrea Gondova"
            photo="andrea-gondova"
            place="Paris, France"
            social={{
              twitter: "reaGondova",
              github: "AdaGondova",
            }}
          />
          <TeamMember
            circle="circle"
            size={2}
            name="Xinhui Li"
            photo="xinhui-li"
            place="Atlanta, USA"
            social={{
              twitter: "xin_hui_li",
              github: "XinhuiLi",
            }}
          />
          <TeamMember
            circle="circle"
            size={2}
            name="Suami Rocha"
            photo="suami-rocha"
            place="Belém, Brazil"
            social={{
              twitter: "suamirochadev",
              github: "suamirocha",
            }}
          />
          <TeamMember
            circle="circle"
            size={2}
            name="Qing (Vincent) Wang"
            photo="qing-wang"
            place="Montreal, Canada"
            social={{
              twitter: "QingWan99752335",
              github: "Vincent-wq",
            }}
          />
          <TeamMember
            circle="circle"
            size={2}
            name="Bruno Hebling Vieira"
            photo="bruno-hebling-vieira"
            place="Zurich, Switzerland"
            social={{
              twitter: "HeblingVieira",
              github: "bhvieira",
            }}
          />
          <TeamMember
            circle="circle"
            size={2}
            name="Sina Mansour L"
            photo="sina-mansour-l"
            place="Melbourne, Australia"
            social={{
              twitter: "Sina_Mansour_L",
              github: "sina-mansour",
            }}
          />
        </div>
      </div>
    </main>
  )
}
