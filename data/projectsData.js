import monster from "../public/assets/images/monster.png";
import futbolanaliz from "../public/assets/images/futbolanaliz.png";
import engapp from "../public/assets/images/engapp2.png";

export const projectsData = [
    {
        id: 1,
        title: "İngilizce Sesli Asistan AI",
        description: "Bu proje Kişisel Gelişim amacıyla geliştirdiğim bir projedir. İngilizce öğrenirken, kelime ve cümleleri daha iyi öğrenmek için geliştirdiğim bir projedir. Projede, kelime ve cümleleri sesli bir şekilde dinleyebilirsiniz. Ayrıca, kelime ve cümlelerin anlamlarını ve örnek cümlelerini görebilirsiniz. Projede, Yapay Zeka modelini kullanarak geliştirdim. Projede, Speech Recognition özelliğini kullandım. Tasarımı Tailwind Css ile yaptım.",
        image: engapp,
        projectUrl: "https://english-apptest.vercel.app",
        githubUrl: "https://github.com/Muhammedersln/english-voice-assistant-React",
        technologies: ["React", "Yapay Zeka", "Elevenlabs", "OpenAI", "TailwindCss"]
    },
    {
        id: 2,
        title: "Monster Clone Web Site",
        description: "Bu proje Staj dönemimde geliştirdiğim bir projedir. Monster firmasının websitesinin bir klonunu geliştirdim. Projeyi responsive bir şekilde geliştirdim. Next.js ile dinamik bir yapı oluşturdum. Server Side Rendering özelliğini kullandım. Projede, veri çekme işlemlerini API üzerinden yaptım. Tasarımı Tailwind Css ile yaptım.",
        image: monster,
        projectUrl: "https://github.com/Muhammedersln/MonsterClone",
        githubUrl: "https://github.com/Muhammedersln/MonsterClone",
        technologies: ["Next.js", "React.js", "TailwindCSS", "Server Side Render", "API"]
    },
    {
        id: 3,
        title: "Yolo ile Futbol Analiz Uygulaması",
        description: "Bu proje Lisans Bitirme Tezim'de geliştirdiğim bir projedir. Yolo yapay zeka modelini kullanarak geliştirdim. Proje, bir futbol maçını analiz ederek, maç içerisindeki oyuncu, hakem ve topu tespit eder. Bu tespitler sonucunda maçı analiz eder ve takımların topla oynama yüzdesini hesaplar. Ve bunu arayüzde gösterir.",
        image: futbolanaliz,
        projectUrl: "https://github.com/Muhammedersln/Graduation-Project--Football-Analysis",
        githubUrl: "https://github.com/Muhammedersln/Graduation-Project--Football-Analysis",
        technologies: ["Python", "YOLO", "Görüntü İşleme", "Yapay Zeka", "UI"]
    }
]; 