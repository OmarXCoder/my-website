import PageSection from '../PageSection';
import {
    JavascriptLogo,
    VueLogo,
    NuxtJsLogo,
    ReactLogo,
    NextJsLogo,
    HTMLLogo,
    SassLogo,
    TailwindLogo,
    BootstrapLogo,
    PHPLogo,
    LaravelLogo,
    WordpressLogo,
    MySqlLogo,
    FirebaseLogo,
    GitLogo,
    WebpackLogo,
} from '../Logos';
import SectionTagline from '../SectionTagline';

const SKILLS = [
    {
        name: 'Javascript',
        icon: JavascriptLogo,
    },
    {
        name: 'VueJs',
        icon: VueLogo,
    },
    {
        name: 'NuxtJs',
        icon: NuxtJsLogo,
    },
    {
        name: 'ReactJs',
        icon: ReactLogo,
    },
    {
        name: 'NextJs',
        icon: NextJsLogo,
    },
    {
        name: 'HTML',
        icon: HTMLLogo,
    },
    {
        name: 'SASS',
        icon: SassLogo,
    },
    {
        name: 'Tailwindcss',
        icon: TailwindLogo,
    },
    {
        name: 'Bootstrap',
        icon: BootstrapLogo,
    },
    {
        name: 'PHP',
        icon: PHPLogo,
    },
    {
        name: 'Laravel',
        icon: LaravelLogo,
    },
    {
        name: 'Wordpress',
        icon: WordpressLogo,
    },
    {
        name: 'MySQL',
        icon: MySqlLogo,
    },
    {
        name: 'Firebase',
        icon: FirebaseLogo,
    },
    {
        name: 'Git',
        icon: GitLogo,
    },
    {
        name: 'Webpack',
        icon: WebpackLogo,
    },
];

export default function SkillsSection() {
    return (
        <PageSection id="skills" heading="Skills &amp; Tools">
            <SectionTagline>
                <i className="fas fa-xs fa-quote-left text-slate-200"></i>
                <span className="mx-1">
                    Only those who have the patience to do simple things perfectly will acquire the skill to do
                    difficult things easily
                </span>
                <i className="fas fa-xs fa-quote-right text-slate-200"></i>
            </SectionTagline>

            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-20 lg:grid-cols-8">
                {SKILLS.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center rounded-lg bg-slate-50 p-4 shadow-sm transition-shadow duration-300 hover:shadow"
                    >
                        <skill.icon />

                        <h5 className="mt-3 tracking-wider text-slate-500">{skill.name}</h5>
                    </div>
                ))}
            </div>
        </PageSection>
    );
}
