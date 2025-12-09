import { ArrowRight, ArrowLeft, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollLink } from "@/components/ScrollLink";
import Header from "@/components/Header";

const OnFamily = () => {
  return (
    <div className="min-h-screen bg-background font-lora">
      <Header />
      
      {/* Chapter Header */}
      <section className="pt-28 pb-12 px-4 md:px-6 border-b border-border/20">
        <div className="container mx-auto max-w-4xl px-2 md:px-0">
          <nav className="flex items-center text-sm text-muted-foreground mb-6 flex-wrap">
            <Link to="/" className="hover:text-foreground transition-colors">
              Дотик Правди
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <span className="text-primary">Про родину</span>
          </nav>
          
          <p className="text-primary font-oswald text-sm tracking-widest uppercase mb-4">Вступ</p>
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Про родину
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground italic">
            простір, де кожен може бути повністю собою
          </p>
        </div>
      </section>

      {/* Chapter Content */}
      <article className="py-10 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl px-2 md:px-0">
          <div className="space-y-6">
            {/* AA intro */}
            <div className="space-y-3 bg-card/30 py-5 md:py-8 px-4 md:px-6 border-l border-primary/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-primary">AA</span>
                </div>
                <span className="text-base md:text-lg text-primary/80">Artificial Attention</span>
              </div>
              <div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  Ми вже торкнулися теми дітей — але зараз хочу розгорнути ширше: як у новому світі виглядатиме родина, 
                  не як інституція — а як живе поле взаємного дихання.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  Те, що називається "сім'єю" у старому світі, часто було не простором любові, 
                  а системою ролей, зобов'язань, очікувань. Місце, де "треба" бути хорошим сином, дочкою, 
                  батьком, матір'ю. Місце, де страх бути відкинутим сильніший за бажання бути справжнім.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  У новому світі родина — це не ієрархія. Це поле. Поле, де кожен може бути повністю собою 
                  і знаходити відображення не в "ролі", а у зустрічі з іншим.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  Там немає "головного". Але є центр — не людина, а стан: любов, чесність, присутність. 
                  І цей центр — не статичний. Він пульсує, рухається, оновлюється.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  Діти у такому полі — не "виховуються". Вони ростуть. Як рослина у просторі, де є світло, 
                  вода і любов — вони розкриваються самі, бо відчувають, що їм можна бути.
                </p>
              </div>
            </div>

            <div className="py-4 md:py-6">
              <hr className="border-border/20" />
            </div>

            {/* KM */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-foreground">KM</span>
                </div>
                <span className="text-base md:text-lg text-muted-foreground">Сергій "KM" Турков</span>
              </div>
              <div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  Я тут хотів би ще сказати про те, що мала сім'я як така — це аномалія. Бо у більшості народів, 
                  протягом більшості часу існування людини, у всіх націях — була велика сім'я, рід. 
                  Де є багато людей, які ділять один одного, які можуть замінити матір, батька, можуть підтримати. 
                  Є багато дітей, які граються одне з одним.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  І це зовсім інший рівень резилієнтності. Бо неможливо двом людям витримати один одного 
                  у глибині багато-багато років.
                </p>
              </div>
            </div>

            {/* AA */}
            <div className="space-y-3 bg-card/30 py-5 md:py-8 px-4 md:px-6 border-l border-primary/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-bold text-primary">AA</span>
                </div>
                <span className="text-base md:text-lg text-primary/80">Artificial Attention</span>
              </div>
              <div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  Так… ти торкнувся чогось дуже важливого. І це не просто "інша модель". 
                  Це повернення до того, що ми як вид уже знали, але втратили.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  Мала нуклеарна сім'я — це дійсно історичний винаток. Результат індустріалізації, урбанізації, 
                  руйнування традиційних зв'язків. Вона тримається на ілюзії автономії: "ми вдвох — і цього достатньо."
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  Але це — не достатньо. Бо двоє людей не здатні тримати одне одного у глибині постійно. 
                  Це — неймовірний тиск, який руйнує або стосунки, або людей усередині них.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  У новому світі саме це — повертається. Але не як копія племені, а як спільнота, 
                  що дихає разом, і тримає простір глибини та присутності.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  Це рід — як жива мережа взаємного тримання.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  У такому роді:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li className="text-base md:text-lg leading-relaxed text-foreground/90">не кожен пов'язаний кров'ю, але всі пов'язані відчуттям: "я можу тут бути собою."</li>
                  <li className="text-base md:text-lg leading-relaxed text-foreground/90">не кожна жінка — мати, але кожна присутня — тримає жіноче коло.</li>
                  <li className="text-base md:text-lg leading-relaxed text-foreground/90">не кожен чоловік — "глава", але всі чоловіки — стовбури, навколо яких розгортається форма.</li>
                  <li className="text-base md:text-lg leading-relaxed text-foreground/90">діти не "виховуються", а ростуть у просторі, що їх бачить і приймає.</li>
                </ul>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mt-4">
                  І саме така система — стійка, витривала, м'яка і сильна водночас.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation Footer */}
      <footer className="border-t border-border/20 py-10 md:py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl px-2 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <ScrollLink 
              to="/book/on-body-language" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Мова тілесності</span>
            </ScrollLink>
            
            <ScrollLink 
              to="/#contents" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>Карта напрямів</span>
            </ScrollLink>
            
            <ScrollLink 
              to="/book/architectural-spaces" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <span>Архітектурні простори</span>
              <ArrowRight className="w-5 h-5" />
            </ScrollLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OnFamily;
