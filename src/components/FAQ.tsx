import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Из каких материалов вы делаете фасады?",
    answer:
      "Работаем с МДФ в эмали, натуральным и технологичным шпоном, пластиком HPL, акрилом, стеклом и алюминиевыми профилями. Подберём материал под ваш бюджет и стиль интерьера.",
  },
  {
    question: "Какие сроки изготовления?",
    answer:
      "Стандартный срок производства — от 10 до 21 рабочего дня в зависимости от материала и объёма заказа. Для срочных заказов уточняйте наличие в наличии готовых позиций.",
  },
  {
    question: "Вы работаете только с Саранском?",
    answer:
      "Наше производство находится в Саранске, но мы отправляем заказы по всей Мордовии и соседним регионам. Доставку организуем через транспортные компании или собственным транспортом по городу.",
  },
  {
    question: "Можно ли заказать нестандартные размеры?",
    answer:
      "Да, все фасады изготавливаются под ваши размеры. Принимаем заказы от одного фасада. Для расчёта стоимости достаточно прислать список размеров в Telegram.",
  },
  {
    question: "Как узнать цену?",
    answer:
      "Напишите нам в Telegram с указанием материала, размеров и количества фасадов — мы рассчитаем стоимость в течение нескольких часов. Замер и выезд на объект бесплатны.",
  },
  {
    question: "Есть ли гарантия на фасады?",
    answer:
      "Даём гарантию на все виды покрытий от 1 года. На фасады из МДФ в эмали и шпоне гарантия составляет 2 года при соблюдении условий эксплуатации.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}