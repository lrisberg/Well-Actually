# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    # ruby encoding: utf-8
    Source.create(
      user_id: 2,
      title: 'Effects of black current anthocyanoside intake on dark adaptation and VDT work-induced transient refractive alteration in healthy humans.',
      link: 'https://www.ncbi.nlm.nih.gov/pubmed/11134978',
      journal: 'Altern Med Rev',
      abstract: 'The effects of oral intake of a black currant anthocyanosides (BCA) concentrate on dark adaptation, video display terminal (VDT) work-induced transient refractive alteration, and subjective asthenopia symptoms (visual fatigue) were examined in a double-blind, placebo-controlled, crossover study with healthy human subjects. In a dark adaptation study, intake of BCA at three dose levels (12.5-, 20-, and 50 mg/subject, n = 12) appeared to bring about dose-dependent lowering of the dark adaptation threshold. Statistical analysis comparing the values before and after intake indicated there was a significant difference at the 50 mg dose (p= 0. 011). Comparing the refraction values for the dominant eye, BCA intake (50 mg/subject, n = 21) resulted in no decrease in the average value after the visual task; whereas, a placebo trial resulted in a large decrease in the average value, resulting in borderline significance (p = 0.064). In the assessment of subjective asthenopia symptoms by questionnaire, significant improvement was recognized on the basis of the statements regarding the eye and lower back after BCA intake.',
      wins: 7,
      friends_lost: 0,
      tags: ["eye health", "eye strain", "computer eye strain", "berries", "anthocyanins"])
    Source.create(
      user_id: 2,
      title: 'Comparison of nutritional quality of the vegan, vegetarian, semi-vegetarian, pesco-vegetarian and omnivorous diet',
      link: 'https://www.ncbi.nlm.nih.gov/pubmed/24667136',
      journal: 'Nutrients',
      abstract: 'The number of studies comparing nutritional quality of restrictive diets is limited. Data on vegan subjects are especially lacking. It was the aim of the present study to compare the quality and the contributing components of vegan, vegetarian, semi-vegetarian, pesco-vegetarian and omnivorous diets. Dietary intake was estimated using a cross-sectional online survey with a 52-items food frequency questionnaire (FFQ). Healthy Eating Index 2010 (HEI-2010) and the Mediterranean Diet Score (MDS) were calculated as indicators for diet quality. After analysis of the diet questionnaire and the FFQ, 1475 participants were classified as vegans (n = 104), vegetarians (n = 573), semi-vegetarians (n = 498), pesco-vegetarians (n = 145), and omnivores (n = 155). The most restricted diet, i.e., the vegan diet, had the lowest total energy intake, better fat intake profile, lowest protein and highest dietary fiber intake in contrast to the omnivorous diet. Calcium intake was lowest for the vegans and below national dietary recommendations. The vegan diet received the highest index values and the omnivorous the lowest for HEI-2010 and MDS. Typical aspects of a vegan diet (high fruit and vegetable intake, low sodium intake, and low intake of saturated fat) contributed substantially to the total score, independent of the indexing system used. The score for the more prudent diets (vegetarians, semi-vegetarians and pesco-vegetarians) differed as a function of the used indexing system but they were mostly better in terms of nutrient quality than the omnivores.',
      wins: 1,
      friends_lost: 0,
      tags: ["health", "diet", "vegan", "vegetarian", "nutrients", "omnivores", "healthy eating"])
    Source.create(
      user_id: 2,
      title: 'Do all sedentary activities lead to weight gain: sleep does not.',
      link: 'https://www.ncbi.nlm.nih.gov/pubmed/20823775',
      journal: 'Curr Opin Clin Nutr Metab Care',
      abstract: 'PURPOSE OF REVIEW:\n
      To discuss the benefits of having a good night\'s sleep for body weight stability.\n
      RECENT FINDINGS:\n
      Experimental studies have shown that short-term partial sleep restriction decreases glucose tolerance, increases sympathetic tone, elevates cortisol concentrations, decreases the satiety hormone leptin, increases the appetite-stimulating hormone ghrelin, and increases hunger and appetite. Short sleep duration might increase the risk of becoming obese, because it does not allow the recovery of a hormonal profile facilitating appetite control. Lack of sleep could also lead to weight gain and obesity by increasing the time available for eating and by making the maintenance of a healthy lifestyle more difficult. Furthermore, the increased fatigue and tiredness associated with sleeping too little could lessen one\'s resolve to follow exercise regimens.\n
      SUMMARY:\n
      Short sleep duration appears to be a novel and independent risk factor for obesity. With the growing prevalence of chronic sleep restriction, any causal association between reduced sleep and obesity would have substantial importance from a public health standpoint. Future research is needed to determine whether sleep extension in sleep-deprived obese individuals will influence appetite control and/or reduce the amount of body fat.',
      notes: 'Wow such science',
      wins: 1,
      friends_lost: 1,
      tags: ["health", "sleep", "obesity", "appetite", "body weight", "weight gain"])
    Source.create(
      user_id: 2,
      title: 'Occupational sitting and health risks: a systematic review.',
      link: 'https://www.ncbi.nlm.nih.gov/pubmed/20837291',
      journal: 'Am J Prev Med',
      abstract: 'CONTEXT:\n
      Emerging evidence suggests that sedentary behavior (i.e., time spent sitting) may be negatively associated with health. The aim of this study was to systematically review the evidence on associations between occupational sitting and health risks.\n
      EVIDENCE ACQUISITION:\n
      Studies were identified in March-April 2009 by literature searches in PubMed, PsycINFO, CENTRAL, CINAHL, EMBASE, and PEDro, with subsequent related-article searches in PubMed and citation searches in Web of Science. Identified studies were categorized by health outcome. Two independent reviewers assessed methodologic quality using a 15-item quality rating list (score range 0-15 points, higher score indicating better quality). Data on study design, study population, measures of occupational sitting, health risks, analyses, and results were extracted.\n
      EVIDENCE SYNTHESIS:\n
      43 papers met the inclusion criteria (21% cross-sectional, 14% case-control, 65% prospective); they examined the associations between occupational sitting and BMI (n=12); cancer (n=17); cardiovascular disease (CVD, n=8); diabetes mellitus (DM, n=4); and mortality (n=6). The median study-quality score was 12 points. Half the cross-sectional studies showed a positive association between occupational sitting and BMI, but prospective studies failed to confirm a causal relationship. There was some case-control evidence for a positive association between occupational sitting and cancer; however, this was generally not supported by prospective studies. The majority of prospective studies found that occupational sitting was associated with a higher risk of DM and mortality.\n
      CONCLUSIONS:\n
      Limited evidence was found to support a positive relationship between occupational sitting and health risks. The heterogeneity of study designs, measures, and findings makes it difficult to draw definitive conclusions at this time.',
      notes: 'Being a programmer is an occupational hazard.',
      wins: 0,
      friends_lost: 1,
      tags: ["health", "sitting", "standing", "cardiovascular", "diabetes", "cancer"])
    Source.create(
      user_id: 2,
      title: 'Screen-based entertainment time, all-cause mortality, and cardiovascular events: population-based study with ongoing mortality and hospital events follow-up.',
      link: 'https://www.ncbi.nlm.nih.gov/pubmed/21232666',
      journal: 'J Am Coll Cardiol',
      abstract: 'OBJECTIVES:\n
      The aim of this study was to examine the independent relationships of television viewing or other screen-based entertainment ("screen time") with all-cause mortality and clinically confirmed cardiovascular disease (CVD) events. A secondary objective was to examine the extent to which metabolic (body mass index, high-density lipoprotein and total cholesterol) and inflammatory (C-reactive protein) markers mediate the relationship between screen time and CVD events.\n
      BACKGROUND:\n
      Although some evidence suggests that prolonged sitting is linked to CVD risk factor development regardless of physical activity participation, studies with hard outcomes are scarce.\n
      METHODS:\n
      A population sample of 4,512 (1,945 men) Scottish Health Survey 2003 respondents (≥35 years) were followed up to 2007 for all-cause mortality and CVD events (fatal and nonfatal combined). Main exposures were interviewer-assessed screen time (<2 h/day; 2 to <4 h/day; and ≥4 h/day) and moderate to vigorous intensity physical activity.\n
      RESULTS:\n
      Two hundred fifteen CVD events and 325 any-cause deaths occurred during 19,364 follow-up person-years. The covariable (age, sex, ethnicity, obesity, smoking, social class, long-standing illness, marital status, diabetes, hypertension)-adjusted hazard ratio (HR) for all-cause mortality was 1.52 (95% confidence interval [CI]: 1.06 to 2.16) and for CVD events was 2.30 (95% CI: 1.33 to 3.96) for participants engaging in ≥4 h/day of screen time relative to <2 h/day. Adjusting for physical activity attenuated these associations only slightly (all-cause mortality: HR: 1.48, 95% CI: 1.04 to 2.13; CVD events: HR: 2.25, 95% CI: 1.30 to 3.89). Exclusion of participants with CVD events in the first 2 years of follow-up and previous cancer registrations did not change these results appreciably. Approximately 25% of the association between screen time and CVD events was explained collectively by C-reactive protein, body mass index, and high-density lipoprotein cholesterol.\n
      CONCLUSIONS:\n
      Recreational sitting, as reflected by television/screen viewing time, is related to raised mortality and CVD risk regardless of physical activity participation. Inflammatory and metabolic risk factors partly explain this relationship.',
      notes: 'Being a programmer is definitely an occupational hazard.',
      wins: 1,
      friends_lost: 3,
      tags: ["health", "sitting", "standing", "CVD", "diabetes", "cancer", "screen time"])
    Source.create(
      user_id: 2,
      title: 'Television Viewing Time and Mortality',
      link: 'http://circ.ahajournals.org/content/121/3/384',
      journal: 'Circulation',
      abstract: 'Background— Television viewing time, the predominant leisure-time sedentary behavior, is associated with biomarkers of cardiometabolic risk, but its relationship with mortality has not been studied. We examined the associations of prolonged television viewing time with all-cause, cardiovascular disease (CVD), cancer, and non-CVD/noncancer mortality in Australian adults.\n

      Methods and Results— Television viewing time in relation to subsequent all-cause, CVD, and cancer mortality (median follow-up, 6.6 years) was examined among 8800 adults ≥25 years of age in the Australian Diabetes, Obesity and Lifestyle Study (AusDiab). During 58 087 person-years of follow-up, there were 284 deaths (87 CVD deaths, 125 cancer deaths). After adjustment for age, sex, waist circumference, and exercise, the hazard ratios for each 1-hour increment in television viewing time per day were 1.11 (95% confidence interval [CI], 1.03 to 1.20) for all-cause mortality, 1.18 (95% CI, 1.03 to 1.35) for CVD mortality, and 1.09 (95% CI, 0.96 to 1.23) for cancer mortality. Compared with a television viewing time of <2 h/d, the fully adjusted hazard ratios for all-cause mortality were 1.13 (95% CI, 0.87 to 1.36) for ≥2 to <4 h/d and 1.46 (95% CI, 1.04 to 2.05) for ≥4 h/d. For CVD mortality, corresponding hazard ratios were 1.19 (95% CI, 0.72 to 1.99) and 1.80 (95% CI, 1.00 to 3.25). The associations with both cancer mortality and non-CVD/noncancer mortality were not significant.\n

      Conclusions— Television viewing time was associated with increased risk of all-cause and CVD mortality. In addition to the promotion of exercise, chronic disease prevention strategies could focus on reducing sitting time, particularly prolonged television viewing.',
      wins: 1,
      friends_lost: 4,
      tags: ["health", "sitting", "standing", "CVD", "diabetes", "cancer", "screen time"])
    Source.create(
      user_id: 2,
      title: 'Call Center Productivity Over 6 Months Following a Standing Desk Intervention',
      link: 'http://www.tandfonline.com/doi/abs/10.1080/21577323.2016.1183534',
      journal: 'IIE Transactions on Occupational Ergonomics and Human Factors',
      abstract: 'Stand-capable desks have been shown to successfully reduce sedentary behavior in the modern office, but whether their utilization improves cognitive productivity is not known. We compared productivity between stand-capable desk users and traditional seated desk users in a call center environment. Data were collected daily over a continuous 6-month period. We found that increased stand-capable desk use is a likely contributor to increased productivity over traditional seated desk use. These findings indicate that use of stand-capable desks as ergonomic interventions to improve physical health among employees may also positively impact their work productivity.',
      wins: 3,
      friends_lost: 2,
      tags: ["health", "sitting", "standing", "standing desks", "productivity", "workplace"])
    User.create(
      email: 'admin@wa.com',
      password: '123',
      password_confirmation: '123'
    )
    User.create(
      email: 'lauren@actually.com',
      username: 'lauren',
      bio: 'The optimist says: the glass is half full. The pessimist says: the glass is half empty. The coder says: the glass is twice as big as it needs to be.',
      photo: 'https://s14-eu5.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRctAMOT4i1HbstfoaeR41sb0Fgu9Y3yxdiFGuZXpCj5Pwwld2xgw&sp=569eb363ab8f86b570d989daadb132c3&anticache=265329',
      password: 'password',
      password_confirmation: 'password'
    )
    User.create(
      email: 'tim@actually.com',
      username: 'tim',
      bio: 'No, your FACE is a logical fallacy!',
      photo: '',
      password: 'password',
      password_confirmation: 'password'
    )
    User.create(
      email: 'megan@actually.com',
      username: 'megan',
      bio: 'I love circular logic because I love circular logic',
      photo: '',
      password: 'password',
      password_confirmation: 'password'
    )
    User.create(
      email: 'erica@actually.com',
      username: 'erica',
      bio: 'The optimist says: the glass is half full. The pessimist says: the glass is half empty. The coder says: the glass is twice as big as it needs to be.',
      photo: 'https://s14-eu5.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRctAMOT4i1HbstfoaeR41sb0Fgu9Y3yxdiFGuZXpCj5Pwwld2xgw&sp=569eb363ab8f86b570d989daadb132c3&anticache=265329',
      password: 'password',
      password_confirmation: 'password'
    )
    User.create(
      email: 'heather@actually.com',
      username: 'heather',
      bio: 'If you don\'t agree with me, it means you haven\'t been listening.',
      photo: '',
      password: 'password',
      password_confirmation: 'password'
    )
