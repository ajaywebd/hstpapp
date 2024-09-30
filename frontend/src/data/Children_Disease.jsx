const Children_Disease = [
  {
    id: 1,
    title: "Acne",
    definition:
      "Acne is the term for plugged pores, pimples, and deeper lumps that occur on the face, neck, chest, back, shoulders, and even the upper arms.",
    prevalence: {
      affected_population:
        "Nearly 17 million people in the US are affected by this condition.",
      onset:
        "Acne most often begins in puberty. During puberty, the male sex hormones increase in both boys and girls, causing the sebaceous glands to become more active. This, in turn, causes the sebaceous glands to produce more sebum or oil.",
    },
    development: {
      heading: "How does acne develop?",
      cause:
        "Acne is caused by clogged sebaceous glands in the pores of the skin. The sebaceous glands produce oil (sebum), which normally travels via hair follicles to the skin surface. If skin cells plug the follicles, blocking the oil, skin bacteria (called Propionibacterium acnes or P. acnes) grow inside the follicles, causing inflammation.",
      progression: [
        "Incomplete blockage of the hair follicle results in blackheads (a semisolid black plug).",
        "Complete blockage of the hair follicle results in whiteheads (a semisolid white plug).",
        "Infection and irritation cause whiteheads to form.",
        "The plugged follicle bursts, spilling oil, skin cells, and bacteria onto the skin surface. In turn, the skin becomes irritated, and pimples or lesions develop.",
      ],
      types: [
        "Superficial (pimples without abscesses)",
        "Deep (when the inflamed pimples push down into the skin causing pus-filled cysts that rupture and result in larger abscesses)",
      ],
    },
    causes: {
      heading: "Causes",
      list: [
        "Rising hormone levels during puberty",
        "Hormone level changes during the menstrual cycle in girls and women",
        "Certain drugs (such as corticosteroids, lithium, or barbiturates)",
        "Oil and grease from the scalp, mineral or cooking oil, and certain cosmetics may worsen acne",
        "Bacteria inside pimples",
        "Squeezing the pimples or scrubbing the skin too hard",
      ],
    },
    symptoms: {
      heading: "Symptoms",
      affected_areas: ["Face", "Chest", "Upper back", "Shoulders", "Neck"],
      common_symptoms: [
        "Blackheads",
        "Whiteheads",
        "Pus-filled lesions that may be painful",
        "Nodules (solid raised bumps)",
      ],
      note: "The symptoms of acne may resemble other skin conditions. Always consult a physician for a diagnosis.",
    },
    treatment: {
      heading: "Treatment",
      goal: "Acne treatment is designed to minimize scarring and improve the appearance of the skin.",
      factors_for_determining_treatment: [
        "The severity of the acne",
        "The adolescent's age, overall health, and medical history",
        "The adolescent's tolerance for specific medications, procedures, or therapies",
        "Expectations for the course of the condition",
        "The patient’s or parent’s opinion or preference",
      ],
      types_of_treatment: {
        topical_medications: {
          description:
            "Topical medications come in creams, gels, lotions, or solutions.",
          medications: [
            {
              name: "Benzoyl peroxide",
              function: "Kills the bacteria",
            },
            {
              name: "Antibiotics",
              function:
                "Helps stop or slow down the growth of P. acnes and reduces inflammation",
            },
            {
              name: "Tretinoin",
              function:
                "Stops the development of new acne lesions and encourages cell turnover, unplugging pimples",
            },
            {
              name: "Adapalene",
              function: "Decreases acne formation",
            },
          ],
        },
        systemic_medications: {
          description:
            "Systemic medications which can be used to treat moderate to severe acne include:",
          medications: ["Doxycycline", "Erythromycin", "Tetracycline"],
        },
        severe_cases: {
          medication: {
            name: "Isotretinoin (Accutane®)",
            function:
              "An oral medication that can reduce the size of the sebaceous glands that produce the skin oil, increase skin cell shedding, and affect the hair follicles to reduce the development of acne lesions.",
            success_rate: "Isotretinoin can clear acne in 90% of patients",
            side_effects:
              "The drug has major unwanted side effects, including psychiatric symptoms.",
            warning:
              "It is very important to discuss this prescription medication with a physician prior to use.",
          },
        },
      },
    },
  },
  {
    id: 2,
    title: "Addison's Disease in Children",
    definition:
      "Addison's disease is when the adrenal glands don't make enough of two steroid hormones: cortisol and aldosterone. Cortisol controls the body's metabolism, blocks inflammatory reactions, and affects the immune system. Aldosterone manages sodium and potassium levels. The adrenal glands sit on top of the kidneys, with one gland on top of each kidney. Addison's disease is fairly rare and may first appear at any age.",
    causes: {
      heading: "What causes Addison's disease in a child?",
      common_causes:
        "The most common cause of Addison's disease is damage to the adrenal glands caused by an autoimmune disease.",
      other_causes: [
        "Cancer",
        "Infection",
        "An autoimmune problem",
        "A rare genetic disease",
        "In rare cases, Addison's disease is passed down in a family.",
      ],
      other_low_corticosteroids_causes: [
        "Use of corticosteroid medicine, such as prednisone, which lowers the amount of natural corticosteroids made by the adrenal glands.",
        "Use of some medicines to treat fungal infections, which may stop corticosteroids being made in the adrenal glands.",
      ],
    },
    risk_factors: {
      heading: "Who's at risk?",
      list: [
        "An autoimmune disease",
        "Cancer",
        "Infection such as tuberculosis",
        "Family history of the disease",
        "History of using corticosteroid medicine",
        "History of using anti-fungal medicine",
      ],
    },
    symptoms: {
      heading: "Symptoms of Addison's disease in a child",
      list: [
        "Muscle weakness",
        "Fatigue",
        "Dizziness",
        "Fast pulse",
        "Dark skin first seen on hands and face",
        "Black freckles",
        "Bluish-black color around the nipples, mouth, rectum, scrotum, or vagina",
        "Weight loss",
        "Dehydration",
        "Loss of appetite",
        "Intense salt craving",
        "Muscle aches",
        "Nausea",
        "Vomiting",
        "Diarrhea",
        "Intolerance to cold",
      ],
      note: "The symptoms of Addison's disease can resemble other health conditions. Ensure your child sees their healthcare provider for a diagnosis.",
    },
    diagnosis: {
      heading: "Addison's disease diagnosis",
      description:
        "Symptoms for Addison’s disease often come on slowly. In addition to a complete medical history and physical examination, diagnostic procedures may include:",
      tests: [
        "Laboratory blood tests to measure levels of corticosteroid hormone (cortisol) and the pituitary hormone ACTH, which regulates adrenal gland function.",
        "An ACTH stimulation test to assess adrenal gland function.",
        "Measurement of electrolytes in the blood.",
      ],
      conclusion:
        "Based on the results of these tests, your child’s doctor can definitively diagnose whether your child has Addison’s disease.",
    },
    treatment: {
      heading: "Addison's disease treatment",
      goal: "The goal of treatment is to replace the hormones and relieve the symptoms. Addison's disease can be life-threatening, and treatment often starts right away with corticosteroid medicine.",
      types: [
        "Corticosteroid medicine may be taken orally or given by IV, depending on the severity of the condition. In most cases, corticosteroid medicine must be taken for life.",
        "Treatment may also include a medicine that helps manage the body's sodium and potassium levels.",
      ],
    },
    complications: {
      heading: "Possible complications",
      list: [
        "Severe abdominal pain",
        "Extreme weakness",
        "Low blood pressure",
        "Kidney failure",
        "Shock from dehydration",
      ],
      additional_risks:
        "Severe complications are most likely to occur when the child is under physical stress. Lack of adrenal hormones may cause high blood levels of potassium, which affects water and sodium levels in the body, and extreme sensitivity to the hormone insulin, leading to low blood sugar levels.",
    },
    when_to_call: {
      heading: "When to call for help",
      description:
        "Stressful events such as surgery, infection, or injury can cause severe symptoms of Addison’s disease. Get medical care for your child right away if they have vomiting, diarrhea, or any other illness.",
    },
    key_points: {
      heading: "Key points about Addison's disease in a child",
      list: [
        "Addison's disease occurs when the adrenal glands don't make enough cortisol and aldosterone.",
        "The most common cause of Addison's disease is damage to the adrenal glands from an autoimmune disease.",
        "Medicines can also cause the adrenal glands to not make enough cortisol.",
        "Mild symptoms of Addison's disease may only appear under physical stress, such as muscle weakness, fatigue, and dizziness.",
        "Addison's disease can be life-threatening, so treatment often starts right away with corticosteroid medicine. In most cases, this medicine must be taken for life.",
      ],
    },
  },
];

export default Children_Disease;
