"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { BookOpen, Globe, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Accueil",          id: "hero"},
        {
          name: "À propos",          id: "about"},
        {
          name: "Expositions",          id: "products"},
        {
          name: "Informations",          id: "faq"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="MCN Dakar"
      button={{ text: "Réserver", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain"}}
      title="Musée des Civilisations noires"
      description="Un dialogue entre les cultures, un carrefour des mémoires, ancré à Dakar."
      buttons={[
        {
          text: "Explorer les expositions",          href: "#products"},
        {
          text: "Planifier sa visite",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/geometric-modern-building-black-white_250224-333.jpg"
      imageAlt="Architecture du Musée des Civilisations noires"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/wide-angle-shot-person-sailing-small-boat-surrounded-with-large-columns_181624-11434.jpg",          alt: "Visiteur 1"},
        {
          src: "http://img.b2bpic.net/free-photo/black-white-shot-architectural-columns-park_181624-1739.jpg",          alt: "Visiteur 2"},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-japanese-garden_23-2149359728.jpg",          alt: "Visiteur 3"},
        {
          src: "http://img.b2bpic.net/free-photo/building_1127-2955.jpg",          alt: "Visiteur 4"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-man-with-fantasy-unicorn-animal-cinematic-atmosphere_23-2151586585.jpg",          alt: "Visiteur 5"},
      ]}
      avatarText="Plus de 200 000 visiteurs passionnés"
      marqueeItems={[
        {
          type: "text",          text: "Histoire"},
        {
          type: "text",          text: "Art"},
        {
          type: "text",          text: "Culture"},
        {
          type: "text",          text: "Dialogue"},
        {
          type: "text",          text: "Mémoire"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Une Vision Partagée"
      description={[
        "Le Musée des Civilisations noires est un espace de rencontre pour les peuples, les cultures et les générations.",        "Nous célébrons la diversité et la richesse historique de l'Afrique et de ses diasporas.",        "Conçu comme un lieu de dialogue, il offre un regard neuf sur le passé et un élan pour l'avenir."]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Art Statuaire Antique",          price: "Accès libre",          variant: "Permanent",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-mask-with-gold-black-paint_23-2148050268.jpg"},
        {
          id: "p2",          name: "Masques des Savoirs",          price: "Accès libre",          variant: "Permanent",          imageSrc: "http://img.b2bpic.net/free-photo/terracotta-vase-with-indigenous-pattern_23-2151585753.jpg"},
        {
          id: "p3",          name: "Textiles du Sahel",          price: "Accès libre",          variant: "Temporal",          imageSrc: "http://img.b2bpic.net/free-photo/orange-ferromagnetic-liquid-metal-with-copy-space_23-2148253609.jpg"},
        {
          id: "p4",          name: "Bronzes du Bénin",          price: "Accès libre",          variant: "Permanent",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-natural-element-organic-background_23-2148872830.jpg"},
        {
          id: "p5",          name: "Céramiques d'Hier",          price: "Accès libre",          variant: "Permanent",          imageSrc: "http://img.b2bpic.net/free-photo/view-ancient-temple-tomb-from-ancient-egyptian-times_23-2151611753.jpg"},
        {
          id: "p6",          name: "Diaspora et Modernité",          price: "Accès libre",          variant: "Temporal",          imageSrc: "http://img.b2bpic.net/free-photo/minimal-modern-vase-books_23-2149681091.jpg"},
      ]}
      title="Nos Expositions"
      description="Plongez au cœur des civilisations à travers nos collections permanentes et temporaires."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Galeries Modernes",          description: "Des espaces modulables pour des scénographies contemporaines.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/square-blank-frames-attached-wall-room_181624-11561.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/flamenco-dancer-studio_23-2149287126.jpg" }
        },
        {
          title: "Ateliers de Recherche",          description: "Un espace dédié à la transmission du savoir et des pratiques ancestrales.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/artist-teacher-supervising-draw-class-explaining-illustration-technique-diverse-students-creativity-studio-multiethnic-people-sketching-vase-model-painting-canvas-learning-artistic-skill_482257-41784.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/shopping-girl-looking-store-window_23-2148023338.jpg" }
        },
        {
          title: "Auditorium",          description: "Une salle polyvalente pour les conférences et performances artistiques.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-modern-styled-entryway_23-2150692321.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-women-rooftop_23-2149223629.jpg" }
        },
      ]}
      showStepNumbers={false}
      title="Espaces Culturels"
      description="Plus qu'un musée, un lieu de vie et de savoir au cœur de Dakar."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Amadou S.",          role: "Visiteur",          testimonial: "Un lieu magnifique qui retrace notre histoire avec élégance.",          imageSrc: "http://img.b2bpic.net/free-photo/young-girl-with-pink-hairs-holding-sketchbook-demonstrating-it_114579-17708.jpg"},
        {
          id: "t2",          name: "Marie L.",          role: "Étudiante",          testimonial: "Une source d'inspiration inestimable pour mes recherches.",          imageSrc: "http://img.b2bpic.net/free-photo/business-professionals-evaluating-real-estate-blueprints-laptop_482257-90806.jpg"},
        {
          id: "t3",          name: "Jean B.",          role: "Touriste",          testimonial: "L'architecture seule vaut le détour, mais le contenu est exceptionnel.",          imageSrc: "http://img.b2bpic.net/free-photo/set-designer-work-indoors_23-2149836995.jpg"},
        {
          id: "t4",          name: "Fatou N.",          role: "Enseignante",          testimonial: "Une étape obligatoire pour comprendre l'Afrique d'hier et d'aujourd'hui.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-with-clay-sculptures_23-2149730902.jpg"},
        {
          id: "t5",          name: "Moussa D.",          role: "Artiste",          testimonial: "Un espace qui honore les civilisations noires avec une dignité remarquable.",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-partners-being-romantic_23-2148656196.jpg"},
      ]}
      title="Ils nous ont visités"
      description="Des témoignages sur l'expérience unique du Musée."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "18 000+",          title: "Objets exposés",          description: "Un patrimoine riche et varié.",          icon: BookOpen,
        },
        {
          id: "m2",          value: "200 000+",          title: "Visiteurs annuels",          description: "Un public local et international.",          icon: Users,
        },
        {
          id: "m3",          value: "12",          title: "Pays d'origine",          description: "Une diversité d'artefacts.",          icon: Globe,
        },
      ]}
      title="Chiffres Clés"
      description="L'impact culturel du MCN Dakar."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",          title: "Quels sont les horaires ?",          content: "Nous sommes ouverts du mardi au dimanche, de 10h à 18h."},
        {
          id: "f2",          title: "Comment réserver un billet ?",          content: "La réservation est possible en ligne sur notre site ou directement sur place."},
        {
          id: "f3",          title: "Le musée est-il accessible ?",          content: "Oui, toutes nos salles sont accessibles aux personnes à mobilité réduite."},
      ]}
      title="Informations pratiques"
      description="Réponses à vos questions fréquentes."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      text="Prêt pour une immersion historique ? Nous vous attendons au cœur de Dakar."
      buttons={[
        {
          text: "Nous contacter",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="MCN DAKAR"
      columns={[
        {
          title: "Musée",          items: [
            {
              label: "Expositions",              href: "#products"},
            {
              label: "À propos",              href: "#about"},
          ],
        },
        {
          title: "Visite",          items: [
            {
              label: "Infos pratiques",              href: "#faq"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
