import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Flower2,
  HeartHandshake,
  Leaf,
  Sparkles,
  SunMedium,
  Waves,
  X,
} from "lucide-react";

const bookingUrl =
  import.meta.env.VITE_BOOKING_URL ??
  "https://calendly.com/votre-compte/decouverte";

const isCalendlyUrl = bookingUrl.includes("calendly.com");

const benefits = [
  {
    icon: Leaf,
    title: "Toucher ultra doux",
    text: "La papouille repose sur des effleurements lents, précis et rassurants, loin des massages toniques ou standardisés.",
  },
  {
    icon: HeartHandshake,
    title: "Présence humaine",
    text: "Chaque séance est pensée comme une vraie pause de reconnexion, avec écoute, douceur et respect du rythme de la personne.",
  },
  {
    icon: Waves,
    title: "Répit et lâcher-prise",
    text: "L'objectif est simple : offrir un moment de calme, de sécurité et de relâchement dans un quotidien souvent trop tendu.",
  },
];

const rituals = [
  "Papouille sensorielle visage, nuque et bras",
  "Séance cocon pour relâcher la charge mentale",
  "Pause douceur pour aidants, seniors et actifs stressés",
  "Rituel lent de présence, d'apaisement et de confort",
];

const testimonials = [
  {
    quote:
      "Une bulle de calme qui m'a permis de retrouver du sommeil et de la clarté en quelques séances.",
    author: "Camille, 37 ans",
  },
  {
    quote:
      "L'accompagnement est très juste, sans pression, avec une vraie sensation d'écoute et d'apaisement.",
    author: "Sophie, 44 ans",
  },
];

const audiences = [
  "Femmes très sollicitées qui ont besoin de ralentir sans performance ni injonction.",
  "Personnes stressées, surchargées mentalement, ou en manque de douceur au quotidien.",
  "Aidantes, mamans, professionnelles de l'accompagnement ou du soin qui donnent beaucoup.",
  "Seniors ou personnes sensibles qui recherchent un toucher délicat, rassurant et non intrusif.",
];

const faqItems = [
  {
    question: "La papouille, c'est quoi exactement ?",
    answer:
      "La papouille est une pratique de bien-être fondée sur un toucher lent, léger et enveloppant. Il ne s'agit ni d'un massage sportif, ni d'un acte médical, mais d'un moment de relâchement profond et de réconfort.",
  },
  {
    question: "À qui s'adresse une séance ?",
    answer:
      "La séance s'adresse à toute personne qui ressent le besoin de souffler, de se déposer, d'être accueillie avec douceur ou de retrouver une sensation de sécurité intérieure.",
  },
  {
    question: "Comment se déroule un rendez-vous ?",
    answer:
      "Chaque rendez-vous commence par un temps d'échange. Ensuite, la séance de papouille se construit selon votre état du moment, vos zones de confort et votre besoin d'apaisement.",
  },
  {
    question: "Combien de séances faut-il prévoir ?",
    answer:
      "Certaines personnes viennent pour une parenthèse ponctuelle, d'autres installent un rythme régulier. L'idée n'est pas de standardiser, mais de proposer un accompagnement réaliste et ajusté.",
  },
];

function CalendlyEmbed({ url }: { url: string }) {
  const embedUrl = useMemo(() => {
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}hide_gdpr_banner=1&background_color=f7f1e7&text_color=21352b&primary_color=cf8c63&embed_domain=localhost&embed_type=Inline`;
  }, [url]);

  return (
    <iframe
      title="Calendrier de réservation"
      src={isCalendlyUrl ? embedUrl : url}
      className="h-full w-full"
      style={{ minHeight: "1120px" }}
    />
  );
}

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    if (!bookingOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [bookingOpen]);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,201,115,0.28),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(126,162,132,0.24),_transparent_30%),linear-gradient(180deg,_rgba(245,239,229,0.92),_rgba(245,239,229,1))]" />
      <div className="pointer-events-none fixed inset-0 bg-grain bg-[length:16px_16px] opacity-30" />

      <header className="sticky top-0 z-40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <p className="font-display text-2xl font-semibold">Papounouche</p>
            <p className="text-sm text-ink/65">Papouilleuse et parenthèse de douceur</p>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-ink/70 md:flex">
            <a href="#approche" className="transition hover:text-ink">Approche</a>
            <a href="#deroule" className="transition hover:text-ink">Déroulé</a>
            <a href="#tarifs" className="transition hover:text-ink">Tarifs</a>
            <a href="#temoignages" className="transition hover:text-ink">Avis</a>
          </nav>
          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-canvas shadow-bloom transition hover:-translate-y-0.5 hover:bg-moss"
          >
            Prendre rendez-vous
          </button>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-16">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-2 text-sm font-semibold text-ink/75"
            >
              <Sparkles className="h-4 w-4 text-clay" />
              Le métier de papouilleuse, pensé pour apaiser et réconforter
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="mt-8 max-w-3xl font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
            >
              Une papouilleuse pour offrir du calme, du réconfort et une vraie bulle hors du stress.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-lg leading-8 text-ink/72"
            >
              La papouille est une pratique de bien-être fondée sur des gestes très
              doux et enveloppants. L'intention est d'offrir une pause sensorielle,
              une reconnexion humaine et un vrai moment de répit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="rounded-full bg-clay px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#bc7550]"
              >
                Réserver une papouille
              </button>
              <a
                href="#deroule"
                className="rounded-full border border-ink/15 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-ink transition hover:border-ink/35 hover:bg-white/60"
              >
                Découvrir l'expérience
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 p-6 shadow-bloom backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(246,201,115,0.38),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(126,162,132,0.35),_transparent_42%)]" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-ink/55">
                    Séance signature
                  </p>
                  <h2 className="mt-3 font-display text-3xl">Papouille cocon</h2>
                </div>
                <div className="rounded-full bg-white/70 p-3">
                  <SunMedium className="h-6 w-6 text-clay" />
                </div>
              </div>

              <div className="mt-8 rounded-[1.75rem] bg-ink px-6 py-8 text-canvas">
                <p className="text-sm uppercase tracking-[0.22em] text-canvas/65">
                  Durée
                </p>
                <p className="mt-2 text-4xl font-extrabold">75 min</p>
                <p className="mt-5 max-w-sm text-canvas/75">
                  Une séance pensée pour calmer la surcharge mentale, adoucir les
                  tensions et laisser la personne se sentir accueillie, posée et apaisée.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {rituals.map((ritual) => (
                  <div
                    key={ritual}
                    className="rounded-[1.5rem] border border-ink/10 bg-white/70 px-5 py-5"
                  >
                    <Flower2 className="h-5 w-5 text-sage" />
                    <p className="mt-3 text-sm font-semibold leading-6 text-ink/72">
                      {ritual}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="approche"
          className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-bloom"
              >
                <div className="inline-flex rounded-full bg-sage/15 p-3 text-moss">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-3xl">{title}</h3>
                <p className="mt-4 text-base leading-7 text-ink/70">{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-moss p-8 text-canvas shadow-bloom"
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-canvas/65">
              À propos
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              Une pratique née du besoin de remettre la douceur au centre.
            </h2>
            <p className="mt-5 text-base leading-8 text-canvas/75">
              Le métier de papouilleuse répond à une attente très contemporaine :
              être touchée avec délicatesse, se sentir considérée, et retrouver un
              espace où l'on peut enfin relâcher la vigilance. Ici, le cadre privilégie
              la lenteur, la présence et le confort émotionnel.
            </p>
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-canvas px-6 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-ink transition hover:-translate-y-0.5"
            >
              <CalendarDays className="h-4 w-4" />
              Voir le calendrier
            </button>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                value: "01",
                title: "Accueil sensible",
                text: "Un premier temps pour comprendre votre état du moment, votre niveau de stress et votre besoin de douceur.",
              },
              {
                value: "02",
                title: "Papouille personnalisée",
                text: "Une séance adaptée avec des gestes lents et rassurants, selon votre sensibilité et vos zones de confort.",
              },
              {
                value: "03",
                title: "Moment de répit",
                text: "Une vraie parenthèse pour relâcher la pression, souffler et retrouver une sensation de sécurité intérieure.",
              },
              {
                value: "04",
                title: "Après-séance",
                text: "Quelques conseils simples pour prolonger l'apaisement et installer plus de douceur dans le quotidien.",
              },
            ].map((item, index) => (
              <motion.article
                key={item.value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="rounded-[2rem] border border-ink/10 bg-white/70 p-6"
              >
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-clay">
                  {item.value}
                </p>
                <h3 className="mt-4 font-display text-3xl">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-ink/68">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="deroule"
          className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-14"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-ink/10 bg-white/70 p-8"
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-clay">
                Pour qui
              </p>
              <h3 className="mt-4 font-display text-4xl leading-tight">
                Une pratique pensée pour les personnes qui ont besoin de douceur réelle.
              </h3>
              <div className="mt-6 space-y-4">
                {audiences.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1.25rem] bg-canvas/80 px-4 py-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-clay" />
                    <p className="text-base leading-7 text-ink/72">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="rounded-[2rem] bg-[linear-gradient(180deg,_rgba(255,255,255,0.78),_rgba(220,197,162,0.48))] p-8 shadow-bloom"
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-clay">
                Déroulé d'une séance
              </p>
              <div className="mt-6 space-y-6">
                {[
                  {
                    step: "1",
                    title: "Temps d'accueil",
                    text: "Nous prenons quelques minutes pour poser le cadre, entendre votre besoin du moment et installer la confiance.",
                  },
                  {
                    step: "2",
                    title: "Papouille lente et enveloppante",
                    text: "Les gestes sont subtils, délicats et continus, pour inviter progressivement le corps et le mental à relâcher.",
                  },
                  {
                    step: "3",
                    title: "Retour au calme",
                    text: "La séance se termine sans précipitation, avec un temps pour revenir doucement et intégrer les sensations.",
                  },
                ].map((item) => (
                  <div key={item.step} className="grid gap-4 sm:grid-cols-[auto_1fr]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-lg font-extrabold text-canvas">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-display text-3xl">{item.title}</h4>
                      <p className="mt-3 text-base leading-8 text-ink/72">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="tarifs"
          className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16"
        >
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] bg-ink p-8 text-canvas shadow-bloom"
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-canvas/60">
                Tarifs
              </p>
              <h3 className="mt-4 font-display text-4xl leading-tight">
                Des formules simples pour réserver sans hésitation.
              </h3>
              <p className="mt-4 text-base leading-8 text-canvas/75">
                Les tarifs ci-dessous sont une base élégante pour le site. Ils pourront
                être ajustés selon vos vrais prix, votre lieu d'exercice et vos formats.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Découverte",
                  duration: "45 min",
                  price: "55€",
                  text: "Une première séance pour découvrir la papouille en douceur.",
                },
                {
                  name: "Papouille cocon",
                  duration: "75 min",
                  price: "85€",
                  text: "Le format signature pour relâcher profondément et prendre vraiment le temps.",
                },
                {
                  name: "Rituel profond",
                  duration: "90 min",
                  price: "105€",
                  text: "Une immersion plus ample pour les périodes de fatigue, de surcharge ou de grand besoin de répit.",
                },
              ].map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-ink/10 bg-white/75 p-6"
                >
                  <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-clay">
                    {item.duration}
                  </p>
                  <h4 className="mt-4 font-display text-3xl">{item.name}</h4>
                  <p className="mt-4 text-4xl font-extrabold text-ink">{item.price}</p>
                  <p className="mt-4 text-base leading-7 text-ink/72">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="temoignages"
          className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-bloom"
              >
                <p className="text-lg leading-8 text-ink/75">"{testimonial.quote}"</p>
                <footer className="mt-6 text-sm font-extrabold uppercase tracking-[0.2em] text-ink/45">
                  {testimonial.author}
                </footer>
              </motion.blockquote>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="rounded-[2rem] bg-[linear-gradient(180deg,_rgba(246,201,115,0.65),_rgba(207,140,99,0.72))] p-8 text-ink shadow-bloom"
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-ink/55">
                Réservation en ligne
              </p>
              <h3 className="mt-4 font-display text-4xl leading-tight">
                Un créneau simple pour réserver votre moment de papouille.
              </h3>
              <p className="mt-4 text-base leading-8 text-ink/72">
                La demande pour les pratiques de douceur et de reconnexion humaine
                grandit fortement. L'agenda en ligne permet de réserver facilement une
                séance, en cabinet ou dans un cadre cocon.
              </p>
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="mt-8 rounded-full bg-ink px-6 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-canvas transition hover:-translate-y-0.5"
              >
                Ouvrir le calendrier
              </button>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="rounded-[2rem] border border-ink/10 bg-white/70 p-8 shadow-bloom lg:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-clay">
              Questions fréquentes
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {faqItems.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[1.5rem] bg-canvas/80 px-5 py-5"
                >
                  <h4 className="font-display text-2xl leading-tight">{item.question}</h4>
                  <p className="mt-3 text-base leading-7 text-ink/72">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {bookingOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-0 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative flex h-screen w-screen flex-col overflow-hidden bg-canvas shadow-bloom lg:h-[100svh] lg:w-[100svw]"
            >
              <div className="flex items-center justify-between border-b border-ink/10 bg-canvas/95 px-5 py-4 lg:px-8">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-clay">
                    Calendrier
                  </p>
                  <h3 className="mt-1 font-display text-2xl lg:text-3xl">Prendre rendez-vous</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setBookingOpen(false)}
                  className="rounded-full border border-ink/10 p-3 text-ink/70 transition hover:bg-white"
                  aria-label="Fermer la fenêtre de réservation"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-ink/10 bg-white/55 px-5 py-3 lg:px-8">
                <div className="flex flex-wrap items-center gap-3 text-sm text-ink/72">
                  {[
                    "Choix du creneau en quelques clics"                  ].map((item) => (
                    <div key={item} className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-3 py-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-clay" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-sm font-bold text-ink/72 transition hover:text-ink lg:inline-flex"
                >
                  Ouvrir dans un nouvel onglet
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="flex-1 bg-[#f7f1e7] p-2 lg:p-3">
                <div className="h-full overflow-hidden rounded-none border-y border-ink/10 bg-white shadow-[0_18px_50px_rgba(33,53,43,0.08)] lg:rounded-[1.5rem] lg:border">
                  <div className="h-full overflow-hidden">
                    <CalendlyEmbed url={bookingUrl} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
