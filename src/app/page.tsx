import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LandingSection from "@/components/LandingSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <LandingSection
          id="ваш-старт"
          title="Ваш Старт у Цифровому Світі"
          backgroundStyle={{ backgroundColor: '#f0f0f0' }}
        >
          {/* Контент секції "Ваш Старт" */}
          <p>Ласкаво просимо до нашої молодої та амбітної вебстудії!</p>
        </LandingSection>
        <LandingSection
        id="про-нас"
        title="Молоді. Амбітні. Креативні."
        backgroundStyle={{ backgroundColor: '#e0e0e0' }}
      >
        <p className="text-lg text-gray-700">
          Ми - команда талановитих розробників та дизайнерів, обєднаних спільною пристрастю до веб-технологій та бажанням створювати інноваційні рішення.
        </p>
        {/* Додайте тут інформацію про вашу команду, цінності тощо */}
      </LandingSection>
      <LandingSection
        id="наші-послуги"
        title="Весь Спектр Веб-Рішень"
        backgroundStyle={{ backgroundColor: '#f8f8f8' }}
      >
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Розробка веб-сайтів будь-якої складності</li>
          <li>UI/UX дизайн, що запамятовується</li>
          <li>SEO-оптимізація для залучення клієнтів</li>
          <li>Підтримка та обслуговування веб-проектів</li>
        </ul>
        {/* Додайте тут детальний опис ваших послуг */}
      </LandingSection>
      <LandingSection
        id="чому-обирають-нас"
        title="Ваш Успіх - Наша Головна Мета"
        backgroundStyle={{ backgroundColor: '#d0d0d0' }}
      >
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Індивідуальний підхід до кожного клієнта</li>
          <li>Використання сучасних технологій та трендів</li>
          <li>Прозорість на кожному етапі розробки</li>
          <li>Підтримка після запуску проекту</li>
        </ul>
        {/* Додайте тут ваші ключові переваги */}
      </LandingSection>

      <LandingSection
        id="пет-проект"
        title="Наш Потенціал у Дії"
        backgroundStyle={{ backgroundColor: '#f0f8ff' }}
      >
        <p className="text-lg text-gray-700">
          Ознайомтеся з нашим пет-проектом, який демонструє наші навички та підхід до розробки. Хоча він ще в процесі, ви вже можете оцінити наш рівень.
        </p>
        {/* Додайте тут опис та, можливо, скріншоти вашого пет-проекту */}
      </LandingSection>

      <LandingSection
        id="контакти"
        title="Зв'яжіться з Нами"
        backgroundStyle={{ backgroundColor: '#e8f5e9' }}
      >
        <p className="text-lg text-gray-700">
          Готові обговорити ваш проект? Залиште заявку або звяжіться з нами зручним для вас способом!
        </p>
        {/* Додайте тут контактну форму або контактну інформацію */}
      </LandingSection>
    </>
  );
}
