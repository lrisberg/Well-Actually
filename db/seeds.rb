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
      title: 'The food-gut human axis: the effects of diet on gut microbiota and metabolome.',
      link: 'https://www.ncbi.nlm.nih.gov/pubmed/28462705',
      journal: 'Curr Med Chem',
      abstract: 'Gut microbiota, the largest symbiont community hosted in human organism, is emerging as a pivotal player in the relationship between dietary habits and health. Oral and, especially, intestinal microbes metabolize dietary components, affecting human health by producing harmful or beneficial metabolites, which are involved in the incidence and progression of several intestinal related and non-related diseases. Habitual diet (Western, Agrarian and Mediterranean omnivore diets, vegetarian, vegan and gluten-free diets) drives the composition of the gut microbiota and metabolome. Within the dietary components, polymers (mainly fibers, proteins, fat and polyphenols) that are not hydrolyzed by human enzymes seem to be the main leads of the metabolic pathways of gut microbiota, which in turn directly influences the human metabolome. Specific relationships between diet and microbes, microbes and metabolites, microbes and immune functions and microbes and/or their metabolites and some human diseases are being established. Dietary treatments with fibers are the most effective to benefit the metabolome profile, by improving the synthesis of short chain fatty acids and decreasing the level of molecules, such as p-cresyl sulfate, indoxyl sulfate and trimethylamine N-oxide, involved in disease state. Based on the axis diet-microbiota-health, this review aims at describing the most recent knowledge oriented towards a profitable use of diet to provide benefits to human health, both directly and indirectly, through the activity of gut microbiota.',
      notes: 'Veeeeery interesting',
      wins: 1,
      friends_lost: 1,
      tags: ["health", "diet"])
    Source.create(
      user_id: 2,
      title: 'Short-Term Effects of Lupin vs. Whey Supplementation on Glucose and Insulin Responses to a Standardized Meal in a Randomized Cross-Over Trial.',
      link: 'https://www.ncbi.nlm.nih.gov/pubmed/28443026',
      journal: 'Front Physiol',
      abstract: 'Background: Whey protein is known to reduce postprandial glycaemia in people with type 2 diabetes mellitus. Lupin as a vegetable source of protein could be considered as an alternative, as the percentage of vegetarian and vegan consumers is raising. The present study compares the acute glycemic effects of whey and lupin in healthy volunteers following a carbohydrate-rich reference meal. Methods In cross-over design, three standardized meals (reference meal; reference meal + whey; reference meal + lupin) were provided to 12 healthy male and female volunteers, aged between 23 and 33, in a balanced, randomized order. Volunteers\' blood glucose and insulin concentrations were analyzed at baseline and at seven time points following the ingestion of the meals. Results: The supplementation of whey or lupin significantly blunted the postprandial increase in blood glucose concentrations compared to the reference meal (p < 0.001). In the overall statistical analysis, this effect was comparable for whey and lupin [Δ AUC whey-lupin = 8%, 0-60 min area under the curve (0-60 min AUC), p = 0.937], with a blunting effect of -46% by whey (p = 0.005, 0-60 min AUC) and of -54% by lupin (p < 0.001, 0-60 min AUC). When comparing whey and lupin data only, the insulin increase was found to be more pronounced for whey protein than for lupin supplementation (Δ AUC whey-lupin = 39%, 0-60 min AUC, p = 0.022). However, when comparing the insulin response of each supplementation to the one of the reference meal, no differences could be detected (whey p = 0.259, 0-60 min AUC; lupin p = 0.275, 0-60 min AUC). Conclusions: Results suggest that lupin and whey can both lower the increase of postprandial blood glucose concentrations to a comparable extent, implying the usability of lupin to reduce postprandial glycaemia. However, the insulin response following the supplementations to a carbohydrate-rich meal seems to differ for these two protein sources.',
      notes: 'Wow such science',
      wins: 6,
      friends_lost: 2,
      tags: ["health", "diet"])
    User.create(
      email: 'admin@wa.com',
      password: '123',
      password_confirmation: '123'
    )
    User.create(
      email: 'secondUser@wa.com',
      password: '123',
      password_confirmation: '123'
    )
    User.create(
      email: 'thirdUser@wa.com',
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
      bio: 'Optimist says: the glass is half full. Pessimist says: the glass is half empty. The coder says: the glass is twice as big as it needs to be.',
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
