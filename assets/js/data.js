const categories = [
  {
    id: "bioestimulantes",
    name: "Bioestimulantes",
    description:
      "Formulaciones para potenciar el desarrollo radicular y las defensas naturales de la planta. La combinación de generadores de raíces con bioestimulantes de antiestrés es la clave para cultivos con buen anclaje, alta productividad y resistencia ante el cambio climático.",
    cssClass: "cat-bio",
    products: [
      {
        id: "raisol",
        name: "Raisol",
        image: "assets/images/raisol_peque.webp",
        pdf: "assets/pdfs/raisol.pdf",
        shortDesc:
          "Enraizador con aminoácidos, fitohormonas, L-aminoácidos y elementos mayores. Contiene extractos de algas marinas y ácidos policarboxílicos para potencializar el desarrollo de raíces primarias y secundarias.",
        fullDesc:
          "Raisol combina ácidos húmicos de alta calidad con extractos de Salix y vitaminas del complejo B, generando una respuesta enraizante rápida. Su formulación líquida facilita la absorción y distribución uniforme en el sustrato, potenciando el desarrollo radicular desde la germinación.",
        benefits: [
          "Reduce el tiempo de enraizamiento en esquejes hasta un 30%",
          "Estimula callogénesis y diferenciación radicular",
          "Acondicionador de suelo integrado",
          "Aumenta la tasa de supervivencia en trasplante",
        ],
        composition:
          "Ácidos húmicos 12%, Extracto de Salix 5%, Vitaminas B1 1200 ppm, B6 800 ppm, Nitrógeno 2%, Fósforo 6%.",
        application:
          "Inmersión de esquejes 30 min o drench al suelo. Dosis: 2–3 cc/L.",
        tag: "Generación de raíces",
      },
      {
        id: "tyron",
        name: "Tyron",
        image: "assets/images/tyron_peque.webp",
        pdf: "assets/pdfs/tyron.pdf",
        shortDesc:
          "Bioestimulante que provee nutrientes y estimula el desarrollo de pelos absorbentes, asegurando la toma de nutrientes del suelo.",
        fullDesc:
          "Tyron es un bioestimulante de última generación formulado con auxinas naturales, citoquininas y extractos de algas marinas que activan los mecanismos de elongación celular en la zona radicular. Su acción sinérgica favorece la iniciación, ramificación y densificación del sistema radicular en todos los estadíos del cultivo.",
        benefits: [
          "Incrementa hasta un 40% la biomasa radicular en primeras semanas",
          "Mejora la absorción de agua y nutrientes del suelo",
          "Compatible con sistemas de fertirrigación",
          "Acelera el establecimiento en trasplante",
        ],
        composition:
          "Auxinas naturales 0.08%, Citoquininas 0.05%, Extracto de algas marinas Ascophyllum nodosum 15%, Aminoácidos libres 8%, Vitaminas B1, B6.",
        application: "Aplicación foliar y drench al suelo. Dosis: 1–2 cc/L.",
        tag: "Generación de raíces",
      },

      {
        id: "algamar",
        name: "Algamar",
        image: "assets/images/algamar_peque.webp",
        pdf: "assets/pdfs/algamar.pdf",
        shortDesc:
          "100% orgánico y ultra soluble, a base de cinco distintas algas marinas: Sargassum, Laminaria, Egregia, Ascophyllum nodosum y Macrocystis.",
        fullDesc:
          "Algamar es 100% orgánico y ultra soluble, formulado a base de cinco distintas algas marinas: Sargassum (rica en ácido algínico), Laminaria y Egregia (ricas en macro y micronutrientes), Ascophyllum nodosum (rica en hormonas naturales y materia orgánica) y Macrocystis (aporta bioactivadores metabólicos, Fe y Ca). Estimula la división celular en meristemos radiculares y mejora la estructura del suelo rizosférico.",
        benefits: [
          "Activa enzimas de crecimiento en zona radicular",
          "Mejora la resistencia a la salinidad",
          "Favorece la colonización por microorganismos benéficos",
          "Incrementa el calibre radicular",
        ],
        composition:
          "Extracto de algas marinas frías 40%, Citoquininas naturales 0.02%, Betaínas 0.8%, Manitol 2%, Polisacáridos 3.5%.",
        application: "Foliar y suelo. Dosis: 1–1.5 cc/L o 2–3 L/ha.",
        tag: "Generación de raíces",
      },
      {
        id: "algavit",
        name: "Algavit",
        image: "assets/images/algavit_peque.webp",
        pdf: "assets/pdfs/algavit.pdf",
        shortDesc:
          "Extracto concentrado de Ascophyllum nodosum que aporta de manera natural auxinas, citocininas, aminoácidos, betaínas, carbohidratos, vitaminas, oligosacáridos y macro y microelementos.",
        fullDesc:
          "Algavit es un extracto concentrado de Ascophyllum nodosum que aporta de manera natural auxinas, citocininas, aminoácidos, betaínas, carbohidratos, vitaminas y oligosacáridos, además de macro y microelementos. Su formulación única eleva la resistencia natural ante condiciones climáticas adversas, protegiendo membranas celulares y clorofila.",
        benefits: [
          "Protección antioxidante celular de alta eficacia",
          "Mantiene la integridad de membranas bajo helada",
          "Reduce la clorosis inducida por estrés",
          "Mejora la recuperación post-granizo o quemadura solar",
        ],
        composition:
          "Extracto de Ascophyllum nodosum, Auxinas naturales, Citoquininas, Betaínas, Oligosacáridos, Vitaminas, Macro y microelementos.",
        application: "Foliar preventiva o curativa. Dosis: 1–1.5 cc/L.",
        tag: "Defensa y antiestrés",
      },
      {
        id: "agrozyme",
        name: "Agrozyme",
        image: "assets/images/agrozyme_peque.webp",
        pdf: "assets/pdfs/agrozyme.pdf",
        shortDesc:
          "De origen natural, estimula procesos metabólicos y fisiológicos como la translocación de sustancias, diferenciación de yemas, síntesis de clorofila y uniformidad en el amarre de flores y frutos.",
        fullDesc:
          "Agrozyme contiene un pool de enzimas extracelulares (celulasas, amilasas, proteasas, fosfatasas) que aceleran la mineralización de materia orgánica y liberan nutrientes inmovilizados en el suelo. De origen natural, estimula la translocación de sustancias, la diferenciación de yemas y celular, la síntesis de clorofila y la uniformidad en el amarre de flores y frutos.",
        benefits: [
          "Degrada materia orgánica compleja en nutrientes asimilables",
          "Activa microbiota beneficiosa del suelo",
          "Mejora estructura y porosidad del suelo",
          "Reduce bloqueos nutricionales",
        ],
        composition:
          "Celulasas, Amilasas, Lipasas, Fosfatasas orgánicas, Proteasas, Xilanasas. Actividad enzimática ≥ 40.000 U/mL.",
        application:
          "Aplicación al suelo vía drench o riego por goteo. Dosis: 2–3 cc/L.",
        tag: "Generación de raíces",
      },
      {
        id: "plantamin",
        name: "Plantamin",
        image: "assets/images/plantamin_peque.webp",
        pdf: "assets/pdfs/plantamin.pdf",
        shortDesc:
          "Formulado a base de aminoácidos, enriquecido con NPK, microelementos, ácido fólico y vitaminas. Produce un desarrollo armónico vegetal radicular y aéreo, obteniendo mayor y mejor producción.",
        fullDesc:
          "Plantamin aporta un espectro completo de aminoácidos libres L-forma obtenidos mediante hidrólisis enzimática de proteínas vegetales, enriquecidos con nitrógeno, fósforo, potasio, microelementos, ácido fólico y vitaminas. Produce un desarrollo armónico vegetal tanto del área radicular como de la parte aérea de las plantas, obteniendo una mayor y mejor producción.",
        benefits: [
          "Reduce el impacto de sequía, heladas y salinidad",
          "Precursor de prolina y glicina-betaína para osmorregulación",
          "Activa la ruta SAR (Systemic Acquired Resistance)",
          "Mejora el color y firmeza de frutos",
        ],
        composition:
          "Aminoácidos libres L-forma 75%, Nitrógeno orgánico 12%, Prolina 4%, Glutamina 6%, Ácido glutámico 8%.",
        application: "Foliar preventiva o post-estrés. Dosis: 1–2 cc/L.",
        tag: "Defensa y antiestrés",
      },
      {
        id: "brotamin",
        name: "Brotamin",
        image: "assets/images/brotamin_peque.webp",
        pdf: "assets/pdfs/brotamin.pdf",
        shortDesc:
          "Formulado a base de aminoácidos y enriquecido con NPK. Indicado para aplicaciones foliares y radiculares en momentos de máxima actividad vegetativa: desde el crecimiento hasta la fructificación o floración.",
        fullDesc:
          "Brotamin combina aminoácidos esenciales con citoquininas naturales y extractos de levadura activada para potenciar la actividad meristemática apical y axilar, induciendo una brotación vigorosa y uniforme. Está indicado para ser usado en aplicaciones foliares y radiculares en los momentos de máxima actividad vegetativa: desde el crecimiento hasta la fructificación o floración.",
        benefits: [
          "Promueve brotación uniforme tras poda o cosecha",
          "Aumenta el número de brotes activos por planta",
          "Mejora la uniformidad del cultivo",
          "Aporta energía metabólica directa a meristemos",
        ],
        composition:
          "Aminoácidos totales 60%, Citoquininas 0.03%, Extracto de levadura 8%, Nitrógeno total 10%, Magnesio 0.5%.",
        application: "Foliar en inicio de ciclo. Dosis: 1.5–2 cc/L.",
        tag: "Defensa y antiestrés",
      },

      {
        id: "floramin",
        name: "Floramin",
        image: "assets/images/floramin_peque.webp",
        pdf: "assets/pdfs/floramin.pdf",
        shortDesc:
          "A base de aminoácidos, especialmente formulado para estimular la floración, desarrollo y maduración de frutos y tubérculos. Asegura mayor consistencia, calidad y tamaño. Contiene zinc, manganeso, cobre, molibdeno y boro.",
        fullDesc:
          "Floramin está diseñado para la etapa crítica de floración. Formulado a base de aminoácidos específicos, está especialmente diseñado para estimular la floración, desarrollo y maduración de los frutos y tubérculos. Asegura una mayor consistencia, calidad y tamaño de los frutos. Contiene, además, zinc, manganeso, cobre, molibdeno y boro.",
        benefits: [
          "Reduce la abscisión floral hasta un 25%",
          "Mejora viabilidad del Polen",
          "Aumenta el porcentaje de cuaja en condiciones de estrés",
          "Aporta microelementos esenciales: Zn, Mn, Cu, Mo, B",
        ],
        composition:
          "Aminoácidos libres 55%, Boro orgánico 0.3%, Zinc, Manganeso, Cobre, Molibdeno.",
        application:
          "Foliar en prefloración y plena floración. Dosis: 1–2 cc/L.",
        tag: "Defensa y antiestrés",
      },

      {
        id: "orofos-magnesio",
        name: "Orofos Magnesio",
        image: "assets/images/orofos_magnesio_peque.webp",
        pdf: "assets/pdfs/orofos-magnesio.pdf",
        shortDesc:
          "Fertilizante concentrado con magnesio y fósforo en forma de ion fosfito de alta asimilación. Estimula la síntesis de fitoalexinas, incrementando la resistencia contra enfermedades fungosas.",
        fullDesc:
          "Orofos Magnesio es un fertilizante concentrado que, además de magnesio, contiene fósforo en forma de ion fosfito de alta asimilación. Además de nutrir, estimula la síntesis de fitoalexinas dando mayor resistencia a las plantas contra enfermedades fungosas, e incrementa la asimilación y transporte de magnesio en la planta.",
        benefits: [
          "Mayor resistencia a enfermedades fungosas",
          "Incrementa asimilación y transporte de magnesio",
          "Fósforo en forma de fosfito de alta asimilación",
          "Doble acción: nutricional y defensiva",
        ],
        composition:
          "Magnesio (MgO), Fósforo en forma de fosfito (P2O5), alta concentración.",
        application: "Foliar o fertirigación. Dosis según etapa del cultivo.",
        tag: "Defensa y antiestrés",
      },
      {
        id: "orofos-calcio",
        name: "Orofos Calcio",
        image: "assets/images/orofos_calcio_peque.webp",
        pdf: "assets/pdfs/orofos-calcio.pdf",
        shortDesc:
          "Fertilizante concentrado con calcio y fósforo en forma de ion fosfito de alta asimilación. Estimula la síntesis de fitoalexinas, incrementando la resistencia contra enfermedades fungosas.",
        fullDesc:
          "Orofos Calcio es un fertilizante concentrado que, además de calcio, contiene el fósforo en forma de ion fosfito de alta asimilación. Además de nutrir, estimula la síntesis de fitoalexinas dando mayor resistencia a las plantas contra enfermedades fungosas, e incrementa la asimilación y transporte de calcio en la planta.",
        benefits: [
          "Mayor resistencia a enfermedades fungosas",
          "Incrementa asimilación y transporte de calcio",
          "Fósforo en forma de fosfito de alta asimilación",
          "Doble acción: nutricional y defensiva",
        ],
        composition:
          "Calcio (CaO), Fósforo en forma de fosfito (P2O5), alta concentración.",
        application: "Foliar o fertirigación. Dosis según etapa del cultivo.",
        tag: "Defensa y antiestrés",
      },

      {
        id: "orofos-pk",
        name: "Orofos P+K",
        image: "assets/images/orofos_pk_peque.webp",
        pdf: "assets/pdfs/orofos-pk.pdf",
        shortDesc:
          "Fertilizante concentrado con potasio y fósforo en forma de fosfito. Además de nutrir, estimula la síntesis de fitoalexinas, con actividad fungistática y fungicida.",
        fullDesc:
          "Orofos P+K es un fertilizante concentrado que, además de potasio, contiene fósforo en forma de fosfito. Además de nutrir, estimula la síntesis de fitoalexinas en la planta, teniendo actividad fungistática y fungicida. Es una herramienta dual que simultáneamente nutre y protege el cultivo.",
        benefits: [
          "Actividad fungistática y fungicida",
          "Estimula síntesis de fitoalexinas",
          "Fósforo en forma de fosfito de alta asimilación",
          "Aporte de potasio para calidad de fruto",
        ],
        composition:
          "Potasio (K2O), Fósforo en forma de fosfito (P2O5), alta concentración.",
        application: "Foliar o fertirigación. Dosis según etapa del cultivo.",
        tag: "Defensa y antiestrés",
      },

      {
        id: "stresso",
        name: "Stresso",
        image: "assets/images/stresso_peque.webp",
        pdf: "assets/pdfs/stresso.pdf",
        shortDesc:
          "100% orgánico, formulado a base de un derivado de la cisteína y ácido fólico. Da vigor, mejor desarrollo y alto rendimiento, aumentando la producción de azúcares, proteínas y vitaminas.",
        fullDesc:
          "Stresso es 100% orgánico, formulado a base de un derivado de la cisteína y ácido fólico. Da vigor, mejor desarrollo y alto rendimiento, aumentando la producción de azúcares, proteínas y vitaminas. Ayuda a que se aprovechen los elementos de los fertilizantes o abonos orgánicos aplicados al suelo, y permite a la planta restablecer su fisiología normal rápidamente ante daño oxidativo.",
        benefits: [
          "Recuperación visible en 48–72 horas post-estrés",
          "Revierte síntomas de fitotoxicidad química",
          "Estabiliza el potencial hídrico celular",
          "Compatible con la mayoría de productos fitosanitarios",
        ],
        composition:
          "Cisteína derivada, Ácido fólico, Prolina, Glicina-betaína, Aminoácidos libres 50%, Vitaminas.",
        application:
          "Foliar de emergencia. Dosis: 2–3 cc/L hasta recuperación.",
        tag: "Defensa y antiestrés",
      },
    ],
  },
  {
    id: "suelo",
    name: "Desbloqueo y establecimiento de microorganismos",
    description:
      "Debido a varios factores como tipo de suelo y pH, los nutrientes del suelo se encuentran atrapados. El uso de ácidos húmicos, fúlvicos y carboxílicos los vuelve disponibles para la planta y los microorganismos, ayudando a estos últimos a su colonización efectiva.",
    cssClass: "cat-suelo",
    products: [
      {
        id: "humax20",
        name: "Humax 20",
        image: "assets/images/humax_20_peque.webp",
        pdf: "assets/pdfs/humax20.pdf",
        shortDesc:
          "100% biodegradable, a base de ácidos húmicos y fúlvicos. Mejora la estructura del suelo, favorece el desarrollo radicular y estimula la actividad microbiana. Aumenta la disponibilidad de nutrientes.",
        fullDesc:
          "Humax 20 es 100% biodegradable, a base de ácidos húmicos (20%) y fúlvicos obtenida de leonardita de alta calidad. Su acción foliar o al suelo mejora la estructura, favorece el desarrollo radicular y estimula la actividad microbiana. Además, aumenta la disponibilidad de nutrientes y la eficiencia de los fertilizantes.",
        benefits: [
          "Incrementa la CIC del suelo hasta un 30%",
          "Quelatiza micronutrientes mejorando su absorción",
          "Estimula la actividad microbiana beneficiosa",
          "Reduce la lixiviación de nitratos",
        ],
        composition:
          "Ácidos húmicos 20%, Ácidos fúlvicos 5%, Potasio 10%, pH 12–13, Densidad 1.25 g/cc.",
        application:
          "Drench o riego. Dosis: 3–5 L/ha. Mezclar con agua antes de aplicar.",
        tag: "Suelo",
      },

      {
        id: "nutrihumus90",
        name: "Nutri-Humus 90",
        image: "assets/images/nutri_humus_90_peque.webp",
        pdf: "assets/pdfs/nutrihumus90.pdf",
        shortDesc:
          "Cristales ultrasolubles con la mayor concentración y alta pureza del ácido húmico. Sus elementos activos son ácidos húmicos y ácidos fúlvicos 100% asimilables.",
        fullDesc:
          "Nutri-Humus 90 son cristales ultrasolubles que contienen la mayor concentración y alta pureza del ácido húmico. Los elementos activos que lo comprenden son ácidos húmicos y ácidos fúlvicos 100% asimilables. Ideal para suelos degradados, sódicos o con baja materia orgánica que requieren recuperación acelerada.",
        benefits: [
          "Concentración excepcional: 1 kg reemplaza 8–10 kg de productos convencionales",
          "Recupera suelos sódicos y compactados",
          "Estimula microbioma del suelo a largo plazo",
          "Mejora retención de humedad en suelos arenosos",
        ],
        composition:
          "Ácidos húmicos + fúlvicos 90%, Potasio 6%, Humedad ≤ 15%, pH en solución 9–11.",
        application:
          "Solubilizar antes de aplicar. Dosis: 0.5–1 kg/ha en drench.",
        tag: "Suelo",
      },
      {
        id: "nutrifull",
        name: "Nutrifull",
        image: "assets/images/nutrifull_peque.webp",
        pdf: "assets/pdfs/nutrifull.pdf",
        shortDesc:
          "Concentrado 100% orgánico a base de ácidos fúlvicos bioactivados enzimáticamente, que incrementan notablemente la absorción, asimilación y movilización de los nutrientes del suelo.",
        fullDesc:
          "Nutrifull es un concentrado 100% orgánico a base de ácidos fúlvicos bioactivados enzimáticamente, los cuales incrementan notablemente la absorción, asimilación y movilización de los nutrientes del suelo. Su formulación 3 en 1 aporta nitrógeno, fósforo y potasio de liberación gradual, acompañados de ácidos húmicos y aminoácidos que maximizan la eficiencia de absorción.",
        benefits: [
          "Triple acción: nutrir, estimular y acondicionar",
          "Libera NPK de forma gradual y eficiente",
          "Reduce en un 20% la dosis de fertilizantes convencionales",
          "Mejora el Brix de los frutos",
        ],
        composition:
          "Nitrógeno total 8%, P2O5 6%, K2O 6%, Ácidos húmicos 5%, Aminoácidos 12%, Carbono orgánico 15%.",
        application: "Riego o fertirrigación. Dosis: 3–5 cc/L o 4–6 L/ha.",
        tag: "Suelo",
      },

      {
        id: "hidroliberex",
        name: "Hidroliberex",
        image: "assets/images/hidroliberex_peque.webp",
        pdf: "assets/pdfs/hidroliberex.pdf",
        shortDesc:
          "A base de ácidos carboxílicos y fúlvicos. Incrementa la absorción de nutrientes, mejora la permeabilidad y aireación, solubiliza el fósforo y aumenta el intercambio catiónico.",
        fullDesc:
          "Hidroliberex actúa como agente de liberación química y biológica a base de ácidos carboxílicos y fúlvicos. Incrementa la absorción, asimilación y movilización de nutrientes. Se puede aplicar foliar o al suelo. Mejora la permeabilidad y la aireación, ayuda a solubilizar el fósforo, aumenta el intercambio catiónico y favorece el desarrollo de la población microbiana.",
        benefits: [
          "Libera hasta el 35% del fósforo inmovilizado",
          "Solubiliza hierro, zinc y manganeso bloqueados",
          "Corrector de pH suave en aplicación radicular",
          "Favorece el desarrollo de población microbiana",
        ],
        composition:
          "Ácidos cítrico y oxálico orgánicos 12%, EDDS biodegradable 3%, Azufre elemental 5%, Ácidos fúlvicos 8%.",
        application: "Drench o incorporado al suelo. Dosis: 2–4 L/ha.",
        tag: "Suelo",
      },
    ],
  },
  {
    id: "correctores",
    name: "Correctores nutricionales",
    description:
      "Muchos de los nutrientes se encuentran bloqueados en el suelo, lo que evita que la planta los absorba eficientemente. Para mantener la actividad fisiológica es necesario complementar con productos foliares que corrijan esas deficiencias.",
    cssClass: "cat-correctores",
    products: [
      {
        id: "sagaquel-zinc",
        name: "Sagaquel Zinc",
        image: "assets/images/sagaquel_zinc_peque.webp",
        pdf: "assets/pdfs/sagaquel-zinc.pdf",
        shortDesc:
          "Fertilizante foliar y radicular líquido multiquelatado de zinc de muy alta concentración.",
        fullDesc:
          "Sagaquel Zinc es un fertilizante foliar y radicular líquido multiquelatado de zinc de muy alta concentración. El zinc es cofactor de más de 300 enzimas y esencial para la síntesis de auxinas (triptófano), por lo que su deficiencia impacta directamente el crecimiento y la calidad de frutos.",
        benefits: [
          "Alta concentración: 14% Zn elemental quelatado",
          "Previene y corrige roseta en frutales",
          "Mejora la síntesis de auxinas endógenas",
          "Visible recuperación en 7–10 días",
        ],
        composition: "Zinc quelatado EDTA 14% (140 g/L).",
        application: "Foliar. Dosis: 1–1.5 cc/L. Evitar mezcla con fosfatos.",
        tag: "Correctores",
      },
      {
        id: "sagaquel-calcio",
        name: "Sagaquel Calcio",
        image: "assets/images/sagaquel_calcio_peque.webp",
        pdf: "assets/pdfs/sagaquel-calcio.pdf",
        shortDesc:
          "Fertilizante foliar y radicular de muy alta concentración de calcio que, además, contiene en forma balanceada otros elementos.",
        fullDesc:
          "Sagaquel Calcio es un fertilizante foliar y radicular de muy alta concentración de calcio que contiene, además, otros elementos en forma balanceada. Utiliza calcio complejado con aminoácidos orgánicos que facilitan su transporte a tejidos de bajo flujo transpiratorio (frutos, meristemos), fundamental para resistencia de pared celular y calidad post-cosecha.",
        benefits: [
          "Previene bitter pit, blossom end rot y punta negra",
          "Mejora firmeza y vida post-cosecha de frutos",
          "Calcio móvil para tejidos con baja transpiración",
          "Reduce ataques de Botrytis y hongos de herida",
        ],
        composition:
          "Calcio orgánico-aminoácido 15% (150 g/L Ca), Nitrógeno orgánico 5%.",
        application: "Foliar en llenado de fruto. Dosis: 2–3 cc/L.",
        tag: "Correctores",
      },
      {
        id: "sagaquel-manganeso",
        name: "Sagaquel Manganeso",
        image: "assets/images/sagaquel_manganeso_peque.webp",
        pdf: "assets/pdfs/sagaquel-manganeso.pdf",
        shortDesc:
          "Fertilizante foliar y radicular multiquelatado. El manganeso interviene en la palatabilidad de la savia y es crucial en la activación de enzimas para el metabolismo de carbohidratos y nitrógeno.",
        fullDesc:
          "Sagaquel Manganeso es un fertilizante foliar y radicular multiquelatado. La aplicación de manganeso interviene en la palatabilidad de la savia, lo cual es importante en el manejo y control de insectos chupadores y masticadores. Además, es crucial en la activación de enzimas para el metabolismo de carbohidratos y nitrógeno.",
        benefits: [
          "Restaura eficiencia fotosintética en 5–7 días",
          "Activa antioxidantes enzimáticos (MnSOD)",
          "Estable en solución hasta pH 7.5",
          "Control de insectos chupadores vía palatabilidad de savia",
        ],
        composition: "Manganeso quelatado EDTA 13% (130 g/L Mn).",
        application: "Foliar. Dosis: 1–2 cc/L según severidad.",
        tag: "Correctores",
      },
      {
        id: "sagaquel-magnesio",
        name: "Sagaquel Magnesio",
        image: "assets/images/sagaquel_magnesio.webp",
        pdf: "assets/pdfs/sagaquel-magnesio.pdf",
        shortDesc:
          "Fertilizante foliar y radicular líquido multiquelatado de magnesio de muy alta concentración, formulado para prevenir y corregir rápidamente deficiencias de magnesio en cultivos hortícolas, frutales, extensivos, ornamentales y forrajeros.",
        fullDesc:
          "SAGAQUEL MAGNESIO es un fertilizante foliar y radicular líquido multiquelatado de magnesio de muy alta concentración que ha sido especialmente formulado para prevenir y corregir rápidamente las deficiencias de este elemento en los cultivos hortícolas, frutales, extensivos, ornamentales y forrajeros. Por su formulación ultra soluble a base de un complejo de varios agentes quelatantes y su alta concentración, puede aplicarse vía foliar así como en forma radicular en suelos con pH ácido y neutro, a través de sistemas de riego por goteo, cintilla, etc., obteniéndose una inmediata absorción y aprovechamiento del producto por la planta.",
        benefits: [
          "Corrige deficiencias de magnesio de forma rápida y eficaz",
          "Ultra soluble, compatible con sistemas de riego por goteo y cintilla",
          "Aplicación foliar y radicular en suelos ácidos y neutros",
          "Alta concentración para mayor rendimiento por litro aplicado",
        ],
        composition:
          "Magnesio quelatado con complejo de agentes quelatantes, alta concentración.",
        application:
          "Foliar y drench. Dosis: 1–2 cc/L o según recomendación técnica.",
        tag: "Correctores",
      },
      {
        id: "nutriplantplus",
        name: "Nutriplant Plus",
        image: "assets/images/nutriplant_plus_peque.webp",
        pdf: "assets/pdfs/nutriplantplus.pdf",
        shortDesc:
          "Fertilizante foliar completo, enriquecido con elementos mayores, secundarios y menores: nitrógeno, fósforo, potasio, hierro, zinc, boro, cobre, manganeso, cobalto y molibdeno.",
        fullDesc:
          "Nutriplant Plus es un fertilizante foliar completo enriquecido con elementos mayores, secundarios y menores: nitrógeno, fósforo, potasio, hierro, zinc, boro, cobre, manganeso, cobalto y molibdeno. Diseñado para etapas de alta demanda nutricional (floración, llenado de fruto), su balanceada relación NPK se potencia con micronutrientes quelatados y aminoácidos.",
        benefits: [
          "Cobertura nutricional completa en una aplicación",
          "Formulación líquida de alta concentración y solubilidad",
          "Bioestimulantes integrados para máxima absorción",
          "Visible respuesta en vigor y color foliar",
        ],
        composition:
          "N 7%, P2O5 7%, K2O 7%, MgO 1%, Fe 0.1%, Mn 0.05%, Zn 0.05%, B 0.02%, Co, Mo, Aminoácidos 5%.",
        application:
          "Foliar. Dosis: 2–3 cc/L. Máximo 4 aplicaciones por ciclo.",
        tag: "Correctores",
      },
      {
        id: "nutriboro",
        name: "Nutri Boro",
        image: "assets/images/nutri_boro_peque.webp",
        pdf: "assets/pdfs/nutriboro.pdf",
        shortDesc:
          "Fertilizante con molibdeno y boro al 11%, formulado para ser aplicado foliarmente o al suelo.",
        fullDesc:
          "Nutri Boro 11% es un fertilizante con molibdeno y boro formulado para ser aplicado foliarmente o al suelo. El boro es esencial para la germinación del tubo polínico, la formación de paredes celulares y el transporte de sacarosa, siendo fundamental en floración y cuaja.",
        benefits: [
          "Máxima movilidad foliar con boretanolamina",
          "Mejora cuaja en condiciones de estrés térmico",
          "Previene necrosis apical en tallos y hojas",
          "Aumenta contenido de azúcares en frutos",
        ],
        composition:
          "Boro total 11% (B2O3), Molibdeno, Boretanolamina 8%, Boro inorgánico 3%.",
        application: "Foliar en prefloración y cuaja. Dosis: 1–1.5 cc/L.",
        tag: "Correctores",
      },

      {
        id: "nutrik80",
        name: "Nutri-K 80",
        image: "assets/images/nutrik80_peque.webp",
        pdf: "assets/pdfs/nutrik80.pdf",
        shortDesc:
          "Fertilizante concentrado de potasio y fósforo con inmediata asimilación, biológicamente activado con L-aminoácidos, materia orgánica, vitaminas, fitohormonas y microelementos esenciales.",
        fullDesc:
          "Nutri-K 80 es un fertilizante concentrado de potasio y fósforo con inmediata asimilación y respuesta por estar biológicamente activado con L-aminoácidos, materia orgánica, vitaminas, fitohormonas y microelementos esenciales. Ideal para fertiirrigación y cultivos sensibles al cloro.",
        benefits: [
          "Máxima concentración: 80% K2O libre de cloro",
          "Biológicamente activado con L-aminoácidos y vitaminas",
          "Solubilidad total en agua fría",
          "Mejora calidad organoléptica y post-cosecha",
        ],
        composition:
          "K2O 80% (Sulfato de potasio), Fósforo, L-aminoácidos, Vitaminas, Fitohormonas, Microelementos, Azufre S 18%.",
        application:
          "Fertirrigación o disolución en agua. Dosis: 3–8 kg/ha según cultivo.",
        tag: "Correctores",
      },

      {
        id: "aminok",
        name: "Aminok",
        image: "assets/images/aminok_peque.webp",
        pdf: "assets/pdfs/aminok.pdf",
        shortDesc:
          "Fertilizante foliar y radicular con alta concentración de potasio y fósforo, enriquecido con aminoácidos. Acelera el llenado del grano o fruto e incrementa la translocación de azúcares.",
        fullDesc:
          "Aminok es un fertilizante foliar y radicular con alta concentración de potasio y fósforo, enriquecido con aminoácidos. Se usa en floración, llenado y amarre. Incrementa la translocación de azúcares, mejorando y uniformizando el llenado.",
        benefits: [
          "Absorción foliar 3–4x más rápida que K mineral",
          "Mejora calibre, firmeza y coloración de frutos",
          "Aumenta el Brix en frutos dulces",
          "Unifomiza el llenado de granos y frutos",
        ],
        composition:
          "Potasio orgánico-aminoácido 30% (K2O), Fósforo, Aminoácidos libres 15%, Nitrógeno orgánico 4%.",
        application: "Foliar en engorde y maduración. Dosis: 2–3 cc/L.",
        tag: "Correctores",
      },

      {
        id: "sagaquel-combi",
        name: "Sagaquel Combi",
        image: "assets/images/sagaquel_combi_peque.webp",
        pdf: "assets/pdfs/sagaquel-combi.pdf",
        shortDesc:
          "Fertilizante foliar y radicular líquido multiquelatado que contiene todos los microelementos necesarios para un máximo rendimiento de las cosechas.",
        fullDesc:
          "Sagaquel Combi es un fertilizante foliar y radicular líquido multiquelatado, que contiene todos los microelementos necesarios para un máximo rendimiento de las cosechas. Todos los elementos están quelatados con EDTA/DTPA y HEDTA según su compatibilidad, asegurando máxima absorción foliar y radicular en un amplio rango de pH.",
        benefits: [
          "Corrige 6 micronutrientes en una sola aplicación",
          "Quelatación estable entre pH 4–9",
          "Alta concentración de activos por litro",
          "Compatible con la mayoría de fitosanitarios y fertilizantes",
        ],
        composition:
          "Fe-EDTA 3%, Mn-EDTA 1%, Zn-EDTA 0.5%, Cu-EDTA 0.3%, B 0.2%, Mo 0.05%.",
        application:
          "Foliar o fertirrigación. Dosis foliar: 1.5–2.5 cc/L. Fertirrigación: 3–5 L/ha.",
        tag: "Correctores",
      },
    ],
  },
  {
    id: "micro",
    name: "Microorganismos",
    description:
      "Soluciones biológicas que favorecen la vida del suelo, mejorando la absorción de nutrientes, fortaleciendo el sistema radicular y promoviendo cultivos más sanos y productivos.",
    cssClass: "cat-micro",
    products: [
      {
        id: "beauvetic",
        name: "Beauvetic",
        image: "assets/images/beauvetic_peque.webp",
        pdf: "assets/pdfs/beauvetic.pdf",
        shortDesc:
          "Beauveria bassiana, hongo que parasita insectos plaga. Ingresa al insecto y ocasiona su muerte; puede infectar a más de 200 especies de insectos.",
        fullDesc:
          "Beauvetic contiene esporas viables y blastosporas activas de Beauveria bassiana ATCC 74040 en alta concentración. Este hongo entomopatógeno infecta insectos al contacto, penetrando a través de la cutícula y colonizando el hemocele, causando la muerte en 5–10 días. Puede infectar a más de 200 especies de insectos sin generar resistencias.",
        benefits: [
          "Efectivo contra trips, mosca blanca, ácaros y pulgones",
          "Sin plazo de seguridad (compatible con recolección inmediata)",
          "No genera resistencias, ideal en rotación",
          "Compatible con depredadores en control biológico",
        ],
        composition:
          "Beauveria bassiana ATCC 74040 ≥ 1×10⁹ UFC/mL, Blastosporas activas 4×10⁸/mL.",
        application:
          "Foliar en condiciones de humedad relativa > 60%. Dosis: 2–4 cc/L. Aplicar al atardecer.",
        tag: "Microorganismos",
      },
      {
        id: "arbusfort",
        name: "Arbusfort Polvo",
        image: "assets/images/arbusfort_peque.webp",
        pdf: "assets/pdfs/arbusfort.pdf",
        shortDesc:
          "Hongos micorrícicos que hacen simbiosis con las raíces, acelerando la microagregación del suelo, aumentando la exploración radicular y mejorando la absorción de nutrientes.",
        fullDesc:
          "Arbusfort Polvo contiene un consorcio de hongos micorrícicos arbusculares (HMA) que forman una simbiosis permanente con las raíces, expandiendo su red de absorción. Aceleran los procesos de microagregados en el suelo, aumentan la exploración de la raíz mejorando la absorción de nutrientes, mantienen la planta hidratada en épocas secas y facilitan la colonización de microorganismos en el suelo.",
        benefits: [
          "Expande la red de absorción radicular hasta 10 veces",
          "Incremento de absorción de P, Zn y Cu del 40–60%",
          "Mantiene la planta hidratada en épocas secas",
          "Facilita la colonización de microorganismos",
        ],
        composition:
          "Consorcio de HMA ≥ 500 propágulos/g, Glomus intraradices dominante.",
        application:
          "Incorporar al sustrato o aplicar directamente sobre raíces al trasplante. Dosis: 5–10 g/planta.",
        tag: "Micorrizas ",
      },
      {
        id: "bacilltic",
        name: "Bacilltic",
        image: "assets/images/bacilltic_peque.webp",
        pdf: "assets/pdfs/bacilltic.pdf",
        shortDesc:
          "Consorcio de Bacillus siamensis, B. subtilis, B. amyloliquefaciens y B. velezensis. Generan antagonismo contra patógenos mediante sustancias antibióticas e intervienen en el control de hongos en hoja y suelo.",
        fullDesc:
          "Bacilltic es un consorcio de Bacillus siamensis, Bacillus subtilis, Bacillus amyloliquefaciens y Bacillus velezensis, que generan antagonismo contra los patógenos mediante la producción de sustancias antibióticas que inhiben el crecimiento de microorganismos. Además, intervienen en el control de hongos patógenos tanto en hoja como en suelo.",
        benefits: [
          "Control de Botrytis, Fusarium y Rhizoctonia",
          "Colonizador radicular que mejora absorción de nutrientes",
          "Produce auxinas y citoquininas como efecto colateral",
          "Totalmente inocuo para fauna auxiliar",
        ],
        composition:
          "Bacillus siamensis, B. subtilis QST 713, B. amyloliquefaciens FZB42, B. velezensis ≥ 1×10⁹ UFC/g.",
        application:
          "Drench radicular o foliar preventivo. Dosis: 2–3 g/L. Evitar mezcla con fungicidas sistémicos.",
        tag: "Microorganismos",
      },
      {
        id: "trichotic-liq",
        name: "Trichotic Líquido",
        image: "assets/images/trichotic_liq_peque.webp",
        pdf: "assets/pdfs/trichotic-liq.pdf",
        shortDesc:
          "Trichoderma spp. que genera antagonismo frente a patógenos, induce resistencia en las plantas e interviene en el control de microorganismos y hongos patógenos.",
        fullDesc:
          "Trichotic Líquido contiene conidias y blastosporas de Trichoderma harzianum T-22 en suspensión líquida estable. Trichoderma spp. generan antagonismo frente a patógenos, inducen resistencia en las plantas e intervienen en el control de microorganismos y hongos patógenos tanto en suelo como en raíz.",
        benefits: [
          "Bioparasita hongos del suelo (Fusarium, Rhizoctonia, Sclerotinia)",
          "Induce Resistencia Sistémica en la planta",
          "Solubiliza fósforo y zinc como beneficio adicional",
          "Compatible con la mayoría de fertilizantes",
        ],
        composition: "Trichoderma harzianum T-22 ≥ 1×10⁸ UFC/mL.",
        application:
          "Drench al suelo. Dosis: 2–4 cc/L. Aplicar en fresco (< 25°C).",
        tag: "Microorganismos",
      },
      {
        id: "paecylotic",
        name: "Paecylotic",
        image: "assets/images/paecylotic_peque.webp",
        pdf: "assets/pdfs/paecylotic.pdf",
        shortDesc:
          "Contiene esporas del hongo nematófago Purpureocillium lilacinum (antes Paecilomyces lilacinus). Actúa sobre huevos, larvas y adultos, y se puede mezclar con fertilizantes.",
        fullDesc:
          "Paecylotic contiene esporas activas de Purpureocillium lilacinum (antes Paecilomyces lilacinus) PLPA que parasitan huevos, larvas y adultos de nematodos fitoparásitos (Meloidogyne, Pratylenchus, Heterodera). Su acción preventiva y curativa reduce poblaciones de nematodos sin impacto en la fauna edáfica benéfica.",
        benefits: [
          "Control de Meloidogyne, Pratylenchus y Heterodera",
          "Actúa sobre huevos, larvas J2 y adultos",
          "Sin plazo de seguridad y sin restricciones de re-entrada",
          "Se puede mezclar con fertilizantes",
        ],
        composition: "Purpureocillium lilacinum PLPA ≥ 1×10⁹ UFC/g.",
        application:
          "Drench antes del trasplante y cada 30–45 días. Dosis: 2–3 g/L.",
        tag: "Microorganismos",
      },
      {
        id: "trichotic-polvo",
        name: "Trichotic Polvo",
        image: "assets/images/trichotic_polvo_peque.webp",
        pdf: "assets/pdfs/trichotic-polvo.pdf",
        shortDesc:
          "Trichoderma spp. en polvo que genera antagonismo frente a patógenos, induce resistencia en las plantas e interviene en el control de microorganismos y hongos patógenos.",
        fullDesc:
          "Trichotic Polvo es la formulación sólida con mayor concentración de UFC del mercado, diseñada para incorporación directa al sustrato antes de trasplante, tratamiento de semillas y aplicación en semilleros. Trichoderma spp. generan antagonismo frente a patógenos, inducen resistencia en las plantas e intervienen en el control de microorganismos y hongos patógenos.",
        benefits: [
          "Incorporación directa a sustrato antes de siembra",
          "Tratamiento de semillas para protección desde germinación",
          "Alta densidad de UFC: mayor presencia radicular",
          "Estable a temperatura ambiente hasta 18 meses",
        ],
        composition: "Trichoderma harzianum T-22 ≥ 1×10⁹ UFC/g.",
        application:
          "Incorporar al sustrato: 1–2 g/L de sustrato. Tratamiento semillas: 5 g/kg.",
        tag: "Microorganismos",
      },
    ],
  },
];
