# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    # ruby encoding: utf-8
    Source.create(
      user_id: 1,
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
      user_id: 1,
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
      wins: 2,
      friends_lost: 1,
      tags: ["health", "sitting", "standing", "cardiovascular", "diabetes", "cancer"])
    Source.create(
      user_id: 1,
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
      wins: 2,
      friends_lost: 0,
      tags: ["health", "sitting", "standing", "cardiovascular", "diabetes", "cancer", "screen time"])
    Source.create(
      user_id: 1,
      title: 'Television Viewing Time and Mortality',
      link: 'http://circ.ahajournals.org/content/121/3/384',
      journal: 'Circulation',
      abstract: 'Background— Television viewing time, the predominant leisure-time sedentary behavior, is associated with biomarkers of cardiometabolic risk, but its relationship with mortality has not been studied. We examined the associations of prolonged television viewing time with all-cause, cardiovascular disease (CVD), cancer, and non-CVD/noncancer mortality in Australian adults.\n

      Methods and Results— Television viewing time in relation to subsequent all-cause, CVD, and cancer mortality (median follow-up, 6.6 years) was examined among 8800 adults ≥25 years of age in the Australian Diabetes, Obesity and Lifestyle Study (AusDiab). During 58 087 person-years of follow-up, there were 284 deaths (87 CVD deaths, 125 cancer deaths). After adjustment for age, sex, waist circumference, and exercise, the hazard ratios for each 1-hour increment in television viewing time per day were 1.11 (95% confidence interval [CI], 1.03 to 1.20) for all-cause mortality, 1.18 (95% CI, 1.03 to 1.35) for CVD mortality, and 1.09 (95% CI, 0.96 to 1.23) for cancer mortality. Compared with a television viewing time of <2 h/d, the fully adjusted hazard ratios for all-cause mortality were 1.13 (95% CI, 0.87 to 1.36) for ≥2 to <4 h/d and 1.46 (95% CI, 1.04 to 2.05) for ≥4 h/d. For CVD mortality, corresponding hazard ratios were 1.19 (95% CI, 0.72 to 1.99) and 1.80 (95% CI, 1.00 to 3.25). The associations with both cancer mortality and non-CVD/noncancer mortality were not significant.\n

      Conclusions— Television viewing time was associated with increased risk of all-cause and CVD mortality. In addition to the promotion of exercise, chronic disease prevention strategies could focus on reducing sitting time, particularly prolonged television viewing.',
      wins: 5,
      friends_lost: 1,
      tags: ["health", "sitting", "standing", "cardiovascular", "diabetes", "cancer", "screen time"])
    User.create(
      email: 'admin@wa.com',
      password: '123',
      password_confirmation: '123'
    )
    User.create(
      email: 'lauren@actually.com',
      username: 'lauren',
      bio: 'Logical fallacies, logical fallacies everywhere',
      photo: 'https://media.makeameme.org/created/logical-fallacies-logical-vjzf7q.jpg',
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
      photo: '',
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
