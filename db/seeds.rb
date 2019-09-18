# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


### USERS

# Demo User

=begin

User.create(
    username: 'UserDemo', 
    password: 'password', 
    profile_name: "Demo Z. User", 
    profile_blurb: "Just some person on the internet who likes to read and write"
)


# Other Users

User.create(
    username: 'SenecaMinor', 
    password: 'password', 
    profile_name: "Seneca the Younger", 
    profile_blurb: "Writer, philosopher, and sometimes playwright. Lead advisor to Nero Augustus."
)

User.create(
    username: 'SenecaMaior', 
    password: 'password', 
    profile_name: "Seneca the Elder", 
    profile_blurb: "Legal expert. Fan of hypotheticals. Spanish transplant in Rome"
)

User.create(
    username: 'TullyPaterPatriae', 
    password: 'password', 
    profile_name: "Marcus Tullius Cicero", 
    profile_blurb: "Arpinate by birth, Roman in all that matters. I write on politics, law, philosophy, language, and morality. Savior of the Republic."
)


##  Up until here has been seeded on my computer + onto my Heroku -- thus the commenting out

ActiveRecord::Base.transaction do

  User.create(
    username: 'RSBourne',
    password: 'password123',
    profile_name: 'Randolph S. Bourne',
    profile_blurb: "New Jersey native, Columbia grad. Interested in domestic and foreign policy, believer in peace and acceptance"
  )

  User.create(
    username: 'SunOfSocrates',
    password: 'password123',
    profile_name: "Plato",
    profile_blurb: "Athenian, philosopher, father of the dialogue. Any questions?"
  )

  User.create(
    username: 'Lolitterateur',
    password: 'password123',
    profile_name: 'Vladimir Nabokov',
    profile_blurb: "Novelist. Poet. Translator. Lepidopterologist. Grand Patzer. 'The rest is rust and stardust.'"
  )

  User.create(
    username: 'MississippiSam',
    password: 'password123',
    profile_name: 'Mark Twain',
    profile_blurb: "It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt."
  )


  ###  ESSAYS

  Essay.create(
    title: 'Transnational America',
    user_id: User.find_by(username: 'RSBourne').id,
    summary: "We call America the melting pot. But are we melting away the parts of us that mean the most?",
    image_url: "https://cdn-images-1.medium.com/focal/152/156/39/46/1*BK1YIlf4l7AS5fY76c6Nqg.jpeg",
    body: "No reverberatory effect of the great war has caused American public opinion more solicitude than the failure of the ‘melting- pot.’ The discovery of diverse nationalistic feelings among our great alien population has come to most people as an intense shock. It has brought out the unpleasant inconsistencies of our traditional beliefs We have had to watch hard- hearted old Brahmins virtuously indignant at the spectacle of the immigrant refusing to be melted, while they jeer at patriots like Mary Antin who write about ‘our forefathers.’ We have had to listen to publicists who express themselves as stunned by the evidence of vigorous nationalistic and cultural movements in this country among Germans, Scandinavians, Bohemians, and Poles, while in the same breath they insist that the mien shall be forcibly assimilated to that Anglo- Saxon tradition which they unquestioningly label ‘American.’

      As the unpleasant truth has come upon us that assimilation in this country was proceeding on lines very different from those we had marked out for it, we found ourselves inclined to blame those who were thwarting our prophecies. The truth became culpable. We blamed the war, we blamed the Germans. And then we discovered with a moral shock that these movements had been making great headway before the war even began. We found that the tendency, reprehensible and paradoxical as it might be, has been for the national clusters of immigrants, as they became more and more firmly established and more and more prosperous, to cultivate more and more assiduously the literatures and cultural traditions of their homelands. Assimilation, in other words, instead of washing out the memories of Europe, made them more and more intensely real. Just as these clusters became more and more objectively American, did they become more and more German or Scandinavian or Bohemian or Polish.

      To face the fact that our aliens are already strong enough to take a share in the direction of their own destiny, and that the strong cultural movements represented by the foreign press, schools, and colonies are a challenge to our facile attempts, is not, however, to admit the failure of Americanization. It is not to fear the failure of democracy. It is rather to urge us to an investigation of what Americanism may rightly mean. It is to ask ourselves whether our ideal has been broad or narrow—whether perhaps the time has not come to assert a higher ideal than the ‘melting- pot.’ Surely we cannot be certain of our spiritual democracy when, claiming to melt the nations within us to a comprehension of our free and democratic institutions, we fly into panic at the first sign of their own will and tendency. We act as if we wanted Americanization to take place only on our own terms, and not by the consent of the governed. All our elaborate machinery of settlement and school and union, of social and political naturalization, however, will move with friction just in so far as it neglects to take into account this strong and virile insistence that America shall be what the immigrant will have a hand in making it, and not what a ruling class, descendant of those British stocks which were the first permanent immigrants, decide that America shall be made. This is the condition which confronts us, and which demands a clear and general readjustment of our attitude and our ideal.

      I

      Mary Antin is right when she looks upon our foreign- born as the people who missed the Mayflower and came over on the first boat they could find. But she forgets that when they did come it was not upon other Mayflower but upon a ‘Fleur,’ a ‘Fleur de Mai,’ a ‘Fleur di Maggio,’ a ‘Majblomst.’ These people were not mere arrivals from the same family, to be welcomed as understood and long-loved but strangers to the neighborhood, with whom a long process of settling down had to take place. For they brought with them their national and racial characters, and each new national quota had to wear slowly away the contempt with which its mere alienness got itself greeted. Each had to make its way slowly from the lowest strata of unskilled labor up to a level where it satisfied the accredited norms of social success.

      * * *

      We are all foreign-born or the descendants of foreign-born, and if distinctions are to be made between us, they should rightly be on some other ground than indigenousness. The early colonists came over with motives no less colonial than the later. They did not come to be assimilated in an American melting pot. They did not come to adopt the culture of the American Indian. They had not the smallest intention of ‘giving themselves without reservation’ to the new country. They came to get freedom to live as they wanted to. They came to escape from the stifling air and chaos of the old world; they came to make their fortune in a new land. They invented no new social framework. Rather they brought over bodily the old ways to which they had been accustomed. Tightly concentrated on a hostile frontier, they were conservative beyond belief. Their pioneer daring was reserved for the objective conquest of material resources. In their folkways, in their social and political institutions, they were, like every colonial people, slavishly imitative of the mother country. So that, in spite of the ‘Revolution,’ our whole legal and political system remained more English than the English, petrified and unchanging, while in England law developed to meet the needs of the changing times.

      It is just this English-Americanconservatism that has been our chief obstacle to social advance. We have needed the new peoples—the order of the German and Scandinavian, the turbulence of the Slav and Hun—to save us from our own stagnation. I do not mean that the illiterate Slav is now the equal of the New Englander of pure descent. He is raw material to be educated, not into a New Englander, but into a socialized American along such lines as those thirty nationalities are being educated in the amazing school of Gary. I do not believe that this process is to be one of decades of evolution. The spectacle of Japan’s sudden jump from medievalism to post- modernism should have destroyed the superstition. We are not dealing with individuals who are to ‘evolve.’ We are dealing with their children, who with that education we are about to have, will start level with all of us. Let us cease to think of ideals like democracy as magical qualities inherent in certain peoples. Let us speak, not of inferior races, but of inferior civilizations. We are all to educate and to be educated. These peoples in America are in a common enterprise. It is not what we are now that concerns us, but what this plastic next generation may become in the light of a new cosmopolitan ideal.

      We are not dealing with static factors, but with fluid and dynamic generations. To contrast the older and the newer immigrants and see the one class as democratically motivated by love of liberty, and the other by mere money- getting, is not to illuminate the future. To think of earlier nationalities as culturally assimilated to America, while we picture the later as a sodden and resistive mass, makes only for bitterness and misunderstanding. There may be a difference between these earlier and these later stocks, but it lies neither in motive for coming nor in strength of cultural allegiance to the homeland. The truth is that no more tenacious cultural allegiance to the mother country has been shown by any alien nation than by the ruling class of Anglo- Saxon descendants in these American States. English snobberies, English religion, English literary styles, English literary reverences and canons, English ethics, English superiorities, have been the cultural food that we have drunk in from our mothers’ breasts. The distinctively American spirit—pioneer, as distinguished from the reminiscently English—that appears in Whitman and Emerson and James, has had to exist on sufferance alongside of this other cult, unconsciously belittled by our cultural makers of opinion. No country has perhaps had so great indigenous genius which had so little influence on the country’s traditions and expressions. The unpopular and dreaded German- American of the present day is a beginning amateur in comparison with those foolish Anglophiles of Boston and New York and Philadelphia whose reversion to cultural type sees uncritically in England’s cause the cause of Civilization, and, under the guise of ethical indepenence of thought, carries along European traditions which are no more ‘American’ than the German categories themselves.

      It speaks well for German- American innocence of heart or else for its lack of imagination that it has not turned the hyphen stigma into a ‘Tu quoque!’ If there were to be any hyphens scattered about, clearly they should be affixed to those English descendants who had had centuries of time to be made American where the German had had only half a century. Most significantly has the war brought out of them this alien virus, showing them still loving English things, owing allegiance to the English Kultur, moved by English shibboleths and prejudice. It is only because it has been the ruling class in this country that bestowed the epithet that we have not heard copiously and scornfully of ‘hyphenated English Americans.’ But even our quarrels with England have had the bad temper, the extravagance, of family quarrels. The Englishman of to- day nags us and dislikes us in that personal, peculiarly intimate way in which he dislikes the Australian, or as we may dislike our younger brothers. He still thinks of us incorrigibly as ‘colonials.’ America—official, controlling, literary, political America—is still, as a writer recently expressed it, ‘culturally speaking, a self- governing dominion of the British Empire.’

      The non- English American can scarcely be blamed if he sometimes thinks of the Anglo- Saxon predominance in America as little more than a predominance of priority. The Anglo-Saxon was merely the first immigrant, the first to found a colony. He has never really ceased to be the descendant of immigrants, nor has he ever succeeded in transforming that colony into a real nation, with a tenacious, richly woven frabric of native culture. Colonials from the other nations have come and settled down beside him. They found no definite native culture which should startle them out of their colonialism, and consequently they looked back to their mother- country, as the earlier Anglo- Saxon immigrant was looking back to his. What has been offered the newcomer has been the chance to learn English, to become a citizen, to salute the flag. And those elements of our ruling classes who are responsible for the public schools, the settlements, all the organizations for amelioration in the cities, have every reason to be proud of the care and labor which they ve devoted to absorbing the immigrant. His opportunities the immigrant has taken to gladly, with almost pathetic eagerness to make his way in the new land without friction or disturbance. The common language has made not only for the necessary communication, but for all the amenities of life.

      If freedom means the right to do pretty much as one pleases, so long as one does not interfere with others, the immigrant has found freedom, and the ruling element has been singularly liberal in its treatment of the invading hordes. But if freedom means a democratic cooperation in determining the ideals and purposes and industrial and social institutions of a country, then the immigrant has not been free, and Anglo- Saxon element is guilty of just what every dominant race is guilty of in every European country: the imposition of its own culture upon the minority peoples. The fact that this imposition has been so mild and, indeed, semi- conscious does not alter its quality. And the war has brought out just the degree to which that purpose of ‘Americanizing,’ that is, ‘Anglo-Saxonizing,’ the immigrant has failed.



      For the Anglo- Saxon now in his bitterness to turn upon the other peoples, talk about their ‘arrogance,’ scold them for not being melted in a pot which never existed, is to betray the unconscious purpose which lay at the bottom of his heart. It betrays too the possession of a racial jealousy similar to that of which he is now accusing the so called ‘hyphenates.’ Let the Anglo Saxon be proud enough of the heroic toil and heroic sacrifices which moulded the nation. But let him ask himself, if he had had to depend on the English descendants, where he would have been living to- day. To those of us who see in the exploitation of unskilled labor the strident red leit- motif of our civilization, the settling of the country presents a great social drama as the waves of immigration broke over it.

      Let the Anglo- Saxon ask himself where he would have been if these races had not come? Let those who feel the inferiority of the non- Anglo-Saxon immigrant contemplate that region of the States which has remained the most distinctively ‘American,’ the South. Let him ask himself whether he would really like to see the foreign hordes Americanized into such an Americanization. Let him ask himself how superior this native civilization is to the great ‘alien’ states of Wisconsin and Minnesota, where Scandinavians, Poles, and Germans have self- consciously labored to preserve their traditional culture, while being outwardly and satisfactorily American. Let him ask himself how much more wisdom, intelligence, industry and social leadership has come out of these alien states than out of all the truly American ones. The South, in fact, while this vast Northern development has gone on, still remains an English colony, stagnant and complacent, having progressed culturally scarcely beyond the early Victorian era. It is culturally sterile because it has had no advantage of cross- fertilization like the Northern states. What has happened in states such as Wisconsin and Minnesota is that strong foreign cultures have struck root in a new and fertile soil. America has meant liberation, and German and Scandinavian political ideas and social energies have expanded to a new potency. The process has not been at all the fancied ‘assimilation’ of the Scandinavian or Teuton. Rather has it been a process of their assimilation of us—I speak as an Anglo- Saxon. The foreign cultures have not been melted down or run together, made into some homogeneous Americanism, but have remained distinct but cooperating to the greater glory and benefit not only of themselves but of all the native ‘Americanism’ around them.

      * * *

      What we emphatically do not want is that these distinctive qualities should be washed out into a tasteless, colorless fluid of uniformity. Already we have far too much of this insipidity,—masses of people who are cultural half- breeds, neither assimilated Anglo-Saxons nor nationals of another culture. Each national colony in this country seems to retain in its foreign press, its vernacular literature, its schools, its intellectual and patriotic leaders, a central cultural nucleus. From this nucleus the colony extends out by imperceptible gradations to a fringe where national characteristics are all but lost. Our cities are filled with these half- breeds who retain their foreign names but have lost the foreign savor. This does not mean that they have actually been changed into New Englanders or MiddleWesterners. It does not mean that they have been really Americanized. It means that, letting slip from them whatever native culture they had, they have substituted for it only the most rudimentary American—the American culture of the cheap newspaper, the ‘movies,’ the popular song, the ubiquitous automobile. The unthinking who survey this class call them assimilated, Americanized. The great American public school has done its work. With these people our institutions are safe. We may thrill with dread at the aggressive hyphenate, but this tame flabbiness is accepted as Americanization. The same moulders of opinion whose ideal is to melt the different races into Anglo-Saxon gold hail this poor product as the satisfying result of their alchemy.

      Yet a truer cultural sense would have told us that it is not the self- conscious cultural nuclei that sap at our American life, but these fringes. It is not the Jew who sticks proudly to the faith of his fathers and boasts of that venerable culture of his who is dangerous to America, but the Jew who has lost the Jewish fire and become a mere elementary, grasping animal. It is not the Bohemian who supports the Bohemian schools in Chicago whose influence is sinister, but the Bohemian who has made money and has got into ward politics. Just so surely as we tend to disintegrate these nuclei of nationalistic culture do we tend to create hordes of men and women without a spiritual country, cultural outlaws, without taste, without standards but those of the mob. We sentence them to live on the most rudimentary planes of American life. The influences at the centre of the nuclei are centripetal. They make for the intelligence and the social values which mean an enhancement of life. And just because the foreign- born retains this expressiveness is he likely to be a better citizen of the American community. The influences at the fringe, however, are centrifugal, anarchical. They make for detached fragments of peoples. Those who came to find liberty achieve only license. They become the flotsam and jetsam of American life, the downward undertow of our civilization with its leering cheapness and falseness of taste and spiritual outlook, the absence of mind and sincere feeling which we see in our slovenly towns, our vapid moving pictures, our popular novels, and in the vacuous faces of the crowds on the city street. This is the cultural wreckage of our time, and it is from the fringes of the Anglo- Saxon as well as the other stocks that it falls. America has as yet no impelling integrating force. It makes too easily for this detritus of cultures. In our loose, free country, no constraining national purpose, no tenacious folk- tradition and folk- style hold the people to a line.

      The war has shown us that not in any magical formula will this purpose be found. No intense nationalism of the European plan can be ours. But do we not begin to see a new and more adventurous ideal? Do we not see how the national colonies in America, deriving power from the deep cultural heart of Europe and yet living here in mutual toleration, freed from the age-long tangles of races, creeds, and dynasties, may work out a federated ideal? America is transplanted Europe, but a Europe that has not been disintegrated and scattered in the transplanting as in some Dispersion. Its colonies live here inextricably mingled, yet not homogeneous. They merge but they do not fuse.

      America is a unique sociological fabric, and it bespeaks poverty of imagination not to be thrilled at the incalculable potentialities of so novel a union of men. To seek no other goal than the weary old nationalism,—belligerent, exclusive, inbreeding, the poison of which we are witnessing now in Europe,—is to make patriotism a hollow sham, and to declare that, in spite of our boastings, America must ever be a follower and not a leader of nations.

      Is it a wild hope that the undertow of opposition to metaphysics in international relations, opposition to militarism, is less a cowardly provincialism than a groping for this higher cosmopolitan ideal? One can understand the irritated restlessness with which our proud pro- British colonists contemplate a heroic conflict across the seas in which they have no part. It was inevitable that our necessary inaction should evolve in their minds into the bogey of national shame and dishonor. But let us be careful about accepting their sensitiveness as final arbiter. Let us look at our reluctance rather as the first crude beginnings of assertion on the part of certain strands in our nationality that they have a right to a voice in the construction of the American ideal. Let us face realstically the America we have around us. Let us work with the forces that are at work. Let us make something of this trans- national spirit instead of outlawing it. Already we are living this cosmopolitan America. What we need is everywhere a vivid consciousness of the new ideal. Deliberate headway must be made against the survivals of the melting pot ideal for the promise of American life.



      We cannot Americanize America worthily by sentimentalizing and moralizing history. When the best schools are expressly renouncing the questionable duty of teaching patriotism by means of history, it is not the time to force shibboleth upon the immigrant. This form of Americanization has been heard because it appealed to the vestiges of our old sentimentalized and moralized patriotism. This has so far held the field as the expression of the new American’s new devotion. The inflections of other voices have been drowned. They must be heard. We must see if the lesson of the war has not been for hundreds of these later Americans a vivid realization of their trans- nationality, a new consciousness of what America meant to them as a citizenship in the world. It is the vague historic idealisms which have provided the fuel for the European flame. Our American ideal can make no progress until we do away with this romantic gilding of the past.

      All our idealisms must be those of future social goals in which all can participate, the good life of personality lived in the environment of the Beloved Community. No mere doubtful triumphs of the past, which redound to the glory of only one of our transnationalities, can satisfy us. It must be a future America, on which all can unite, which pulls us irresistibly toward it, as we understand each other more warmly.

      To make real this striving amid dangers and apathies is work for a younger intelligentsia of America. Here is an enterprise of integration into which we can all pour ourselves, of a spiritual welding which should make us, if the final menace ever came, no weaker, but infinitely strong.

      (Thie article was originally published in the July 1916 issue of The Atlantic (https://www.theatlantic.com/magazine/archive/1916/07/trans-national-america/304838/)"
  )

  Essay.create(
    title: "Crowds, Spectacles, and Other Reasons You Should Just Stay At Home",
    user_id: User.find_by(username: "SenecaMinor").id,
    summary: "When popular culture is all violence and no virtue, should we think twice about our own consumption of violent media?",
    image_url: "https://cdn-images-1.medium.com/focal/152/156/42/47/1*n9aGfSHnRi-SIcBoSOOBcw.jpeg",
    body: "Do you ask me what you should regard as especially to be avoided? I say, crowds; for as yet you cannot trust yourself to them with safety. I shall admit my own weakness, at any rate; for I never bring back home the same character that I took abroad with me. Something of that which I have forced to be calm within me is disturbed; some of the foes that I have routed return again. Just as the sick man, who has been weak for a long time, is in such a condition that he cannot be taken out of the house without suffering a relapse, so we ourselves are affected when our souls are recovering from a lingering disease. To consort with the crowd is harmful; there is no person who does not make some vice attractive to us, or stamp it upon us, or taint us unconsciously therewith. Certainly, the greater the mob with which we mingle, the greater the danger.

      But nothing is so damaging to good character as the habit of lounging at the games; for then it is that vice steals subtly upon one through the avenue of pleasure. What do you think I mean? I mean that I come home more greedy, more ambitious, more voluptuous, and even more cruel and inhuman, – because I have been among human beings. By chance I attended a mid-day exhibition, expecting some fun, wit, and relaxation, – an exhibition at which men's eyes have respite from the slaughter of their fellow-men. But it was quite the reverse. The previous combats were the essence of compassion; but now all the trifling is put aside and it is pure murder. The men have no defensive armour. They are exposed to blows at all points, and no one ever strikes in vain. Many persons prefer this programme to the usual pairs and to the bouts 'by request'. Of course they do; there is no helmet or shield to deflect the weapon. What is the need of defensive armour, or of skill? All these mean delaying death. In the morning they throw men to the lions and the bears; at noon, they throw them to the spectators. The spectators demand that the slayer shall face the man who is to slay him in his turn; and they always reserve the latest conqueror for another butchering. The outcome of every fight is death, and the means are fire and sword. This sort of thing goes on while the arena is empty. You may retort: 'But he was a highway robber; he killed a man!' And what of it? Granted that, as a murderer, he deserved this punishment, what crime have you committed, poor fellow, that you should deserve to sit and see this show? In the morning they cried 'Kill him! Lash him! Burn him! Why does he meet the sword in so cowardly a way? Why does he strike so feebly? Why doesn't he die game? Whip him to meet his wounds! Let them receive blow for blow, with chests bare and exposed to the stroke!' And when the games stop for the intermission, they announce: 'A little throat-cutting in the meantime, so that there may still be something going on!'

      Come now; do you not understand even this truth, that a bad example reacts on the agent? Thank the immortal gods that you are teaching cruelty to a person who cannot learn to be cruel. The young character, which cannot hold fast to righteousness, must be rescued from the mob; it is too easy to side with the majority. Even Socrates, Cato, and Laelius might have been shaken in their moral strength by a crowd that was unlike them; so true it is that none of us, no matter how much he cultivates his abilities, can withstand the shock of faults that approach, as it were, with so great a retinue. Much harm is done by a single case of indulgence or greed; the familiar friend, if he be luxurious, weakens and softens us imperceptibly; the neighbour, if he be rich, rouses our covetousness; the companion, if he be slanderous, rubs off some of his rust upon us, even though we be spotless and sincere. What then do you think the effect will be on character, when the world at large assaults it! You must either imitate or loathe the world.

      But both courses are to be avoided; you should not copy the bad simply because they are many, nor should you hate the many because they are unlike you. Withdraw into yourself, as far as you can. Associate with those who will make a better man of you. Welcome those whom you yourself can improve. The process is mutual; for men learn while they teach. There is no reason why pride in advertising your abilities should lure you into publicity, so that you should desire to recite or harangue before the general public. Of course I should be willing for you to do so if you had a stock-in-trade that suited such a mob; as it is, there is not a man of them who can understand you. One or two individuals will perhaps come in your way, but even these will have to be moulded and trained by you so that they will understand you. You may say: 'For what purpose did I learn all these things?' But you need not fear that you have wasted your efforts; it was for yourself that you learned them.

      In order, however, that I may not to-day have learned exclusively for myself, I shall share with you three excellent sayings, of the same general purport, which have come to my attention. This letter will give you one of them as payment of my debt; the other two you may accept as a contribution in advance. Democritus says: 'One man means as much to me as a multitude, and a multitude only as much as one man.' The following also was nobly spoken by someone or other, for it is doubtful who the author was; they asked him what was the object of all this study applied to an art that would reach but very few. He replied: 'I am content with few, content with one, content with none at all. The third saying – and a noteworthy one, too – is by Epicurus, written to one of the partners of his studies: 'I write this not for the many, but for you; each of us is enough of an audience for the other.' Lay these words to heart, that you may scorn the pleasure which comes from the applause of the majority. Many men praise you; but have you any reason for being pleased with yourself, if you are a person whom the many can understand? Your good qualities should face inwards. Farewell.

      (Translated Gummere, 1925. https://en.wikisource.org/wiki/Moral_letters_to_Lucilius/Letter_7"
  )

  Essay.create(
    title: "The Origin of Love",
    user_id: User.find_by(username: "SunOfSocrates").id,
    summary: "Who ever said there was only one kind of love?",
    image_url: "https://cdn-images-1.medium.com/focal/152/156/50/46/1*rQ9VkSA07S1tllmiWMB2Aw.jpeg",
    body: "Mankind, judging by their neglect of him, have never, as I think, at all understood the power of Love. For if they had understood him they would surely have built noble temples and altars, and offered solemn sacrifices in his honour; but this is not done, and most certainly ought to be done: since of all the gods he is the best friend of men, the helper and the healer of the ills which are the great impediment to the happiness of the race. I will try to describe his power to you, and you shall teach the rest of the world what I am teaching you. In the first place, let me treat of the nature of man and what has happened to it; for the original human nature was not like the present, but different. The sexes were not two as they are now, but originally three in number; there was man, woman, and the union of the two, having a name corresponding to this double nature, which had once a real existence, but is now lost, and the word 'Androgynous' is only preserved as a term of reproach. In the second place, the primeval man was round, his back and sides forming a circle; and he had four hands and four feet, one head with two faces, looking opposite ways, set on a round neck and precisely alike; also four ears, two privy members, and the remainder to correspond. He could walk upright as men now do, backwards or forwards as he pleased, and he could also roll over and over at a great pace, turning on his four hands and four feet, eight in all, like tumblers going over and over with their legs in the air; this was when he wanted to run fast. Now the sexes were three, and such as I have described them; because the sun, moon, and earth are three;-and the man was originally the child of the sun, the woman of the earth, and the man-woman of the moon, which is made up of sun and earth, and they were all round and moved round and round: like their parents. Terrible was their might and strength, and the thoughts of their hearts were great, and they made an attack upon the gods; of them is told the tale of Otys and Ephialtes who, as Homer says, dared to scale heaven, and would have laid hands upon the gods. Doubt reigned in the celestial councils. Should they kill them and annihilate the race with thunderbolts, as they had done the giants, then there would be an end of the sacrifices and worship which men offered to them; but, on the other hand, the gods could not suffer their insolence to be unrestrained.

      At last, after a good deal of reflection, Zeus discovered a way. He said: 'Methinks I have a plan which will humble their pride and improve their manners; men shall continue to exist, but I will cut them in two and then they will be diminished in strength and increased in numbers; this will have the advantage of making them more profitable to us. They shall walk upright on two legs, and if they continue insolent and will not be quiet, I will split them again and they shall hop about on a single leg.' He spoke and cut men in two, like a sorb-apple which is halved for pickling, or as you might divide an egg with a hair; and as he cut them one after another, he bade Apollo give the face and the half of the neck a turn in order that the man might contemplate the section of himself: he would thus learn a lesson of humility. Apollo was also bidden to heal their wounds and compose their forms. So he gave a turn to the face and pulled the skin from the sides all over that which in our language is called the belly, like the purses which draw in, and he made one mouth at the centre, which he fastened in a knot (the same which is called the navel); he also moulded the breast and took out most of the wrinkles, much as a shoemaker might smooth leather upon a last; he left a few, however, in the region of the belly and navel, as a memorial of the primeval state. After the division the two parts of man, each desiring his other half, came together, and throwing their arms about one another, entwined in mutual embraces, longing to grow into one, they were on the point of dying from hunger and self-neglect, because they did not like to do anything apart; and when one of the halves died and the other survived, the survivor sought another mate, man or woman as we call them, being the sections of entire men or women, and clung to that. They were being destroyed, when Zeus in pity of them invented a new plan: he turned the parts of generation round to the front, for this had not been always their position and they sowed the seed no longer as hitherto like grasshoppers in the ground, but in one another; and after the transposition the male generated in the female in order that by the mutual embraces of man and woman they might breed, and the race might continue; or if man came to man they might be satisfied, and rest, and go their ways to the business of life: so ancient is the desire of one another which is implanted in us, reuniting our original nature, making one of two, and healing the state of man.

      Each of us when separated, having one side only, like a flat fish, is but the indenture of a man, and he is always looking for his other half. Men who are a section of that double nature which was once called Androgynous are lovers of women; adulterers are generally of this breed, and also adulterous women who lust after men: the women who are a section of the woman do not care for men, but have female attachments; the female companions are of this sort. But they who are a section of the male follow the male, and while they are young, being slices of the original man, they hang about men and embrace them, and they are themselves the best of boys and youths, because they have the most manly nature. Some indeed assert that they are shameless, but this is not true; for they do not act thus from any want of shame, but because they are valiant and manly, and have a manly countenance, and they embrace that which is like them. And these when they grow up become our statesmen, and these only, which is a great proof of the truth of what I am saving. When they reach manhood they are loves of youth, and are not naturally inclined to marry or beget children,-if at all, they do so only in obedience to the law; but they are satisfied if they may be allowed to live with one another unwedded; and such a nature is prone to love and ready to return love, always embracing that which is akin to him. And when one of them meets with his other half, the actual half of himself, whether he be a lover of youth or a lover of another sort, the pair are lost in an amazement of love and friendship and intimacy, and would not be out of the other's sight, as I may say, even for a moment: these are the people who pass their whole lives together; yet they could not explain what they desire of one another. For the intense yearning which each of them has towards the other does not appear to be the desire of lover's intercourse, but of something else which the soul of either evidently desires and cannot tell, and of which she has only a dark and doubtful presentiment. Suppose Hephaestus, with his instruments, to come to the pair who are lying side, by side and to say to them, 'What do you people want of one another?'' they would be unable to explain. And suppose further, that when he saw their perplexity he said: 'Do you desire to be wholly one; always day and night to be in one another's company? for if this is what you desire, I am ready to melt you into one and let you grow together, so that being two you shall become one, and while you live a common life as if you were a single man, and after your death in the world below still be one departed soul instead of two-I ask whether this is what you lovingly desire, and whether you are satisfied to attain this?'-there is not a man of them who when he heard the proposal would deny or would not acknowledge that this meeting and melting into one another, this becoming one instead of two, was the very expression of his ancient need. And the reason is that human nature was originally one and we were a whole, and the desire and pursuit of the whole is called love. There was a time, I say, when we were one, but now because of the wickedness of mankind God has dispersed us, as the Arcadians were dispersed into villages by the Lacedaemonians. And if we are not obedient to the gods, there is a danger that we shall be split up again and go about in basso-relievo, like the profile figures having only half a nose which are sculptured on monuments, and that we shall be like tallies.

      Wherefore let us exhort all men to piety, that we may avoid evil, and obtain the good, of which Love is to us the lord and minister; and let no one oppose him-he is the enemy of the gods who oppose him. For if we are friends of the God and at peace with him we shall find our own true loves, which rarely happens in this world at present. I am serious, and therefore I must beg Eryximachus not to make fun or to find any allusion in what I am saying to Pausanias and Agathon, who, as I suspect, are both of the manly nature, and belong to the class which I have been describing. But my words have a wider application-they include men and women everywhere; and I believe that if our loves were perfectly accomplished, and each one returning to his primeval nature had his original true love, then our race would be happy. And if this would be best of all, the best in the next degree and under present circumstances must be the nearest approach to such an union; and that will be the attainment of a congenial love. Wherefore, if we would praise him who has given to us the benefit, we must praise the god Love, who is our greatest benefactor, both leading us in this life back to our own nature, and giving us high hopes for the future, for he promises that if we are pious, he will restore us to our original state, and heal us and make us happy and blessed.
        
      (Translate by Benjamin Jowett. http://classics.mit.edu/Plato/symposium.html)"
  )

  Essay.create(
    title: "Good Readers and Good Writers",
    user_id: User.find_by(username: "Lolitterateur").id,
    summary: "A kind of detective investigation of the mystery of literary structures",
    image_url: "https://cdn-images-1.medium.com/fit/c/152/156/0*F2KoTRu8rUDJUmUI",
    body: "'How to be a Good Reader' or 'Kindness to Authors'—something of that sort might serve to provide a subtitle for these various discussions of various authors, for my plan is to deal lovingly, in loving and lingering detail, with several European Masterpieces. A hundred years ago, Flaubert in a letter to his mistress made the following remark: Commel'on serait savant si l’on connaissait bien seulement cinq a six livres: 'What a scholar one might be if one knew well only some half a dozen books.'

      In reading, one should notice and fondle details. There is nothing wrong about the moonshine of generalization when it comes after the sunny trifles of the book have been lovingly collected. If one begins with a readymade generalization, one begins at the wrong end and travels away from the book before one has started to understand it. Nothing is more boring or more unfair to the author than starting to read, say, Madame Bovary, with the preconceived notion that it is a denunciation of the bourgeoisie. We should always remember that the work of art is invariably the creation of a new world, so that the first thing we should do is to study that new world as closely as possible, approaching it as something brand new, having no obvious connection with the worlds we already know. When this new world has been closely studied, then and only then let us examine its links with other worlds, other branches of knowledge.

      Another question: Can we expect to glean information about places and times from a novel? Can anybody be so naive as to think he or she can learn anything about the past from those buxom best-sellers that are hawked around by book clubs under the heading of historical novels? But what about the masterpieces? Can we rely on Jane Austen’s picture of landowning England with baronets and landscaped grounds when all she knew was a clergyman’s parlor? And Bleak House, that fantastic romance within a fantastic London, can we call it a study of London a hundred years ago? Certainly not. And the same holds for other such novels in this series. The truth is that great novels are great fairy tales—and the novels in this series are supreme fairy tales.

      Time and space, the colors of the seasons, the movements of muscles and minds, all these are for writers of genius (as far as we can guess and I trust we guess right) not traditional notions which may be borrowed from the circulating library of public truths but a series of unique surprises which master artists have learned to express in their own unique way. To minor authors is left the ornamentation of the commonplace: these do not bother about any reinventing of the world; they merely try to squeeze the best they can out of a given order of things, out of traditional patterns of fiction. The various combinations these minor authors are able to produce within these set limits may be quite amusing in a mild ephemeral way because minor readers like to recognize their own ideas in a pleasing disguise. But the real writer, the fellow who sends planets spinning and models a man asleep and eagerly tampers with the sleeper’s rib, that kind of author has no given values at his disposal: he must create them himself. The art of writing is a very futile business if it does not imply first of all the art of seeing the world as the potentiality of fiction. The material of this world may be real enough (as far as reality goes) but does not exist at all as an accepted entirety: it is chaos, and to this chaos the author says 'go!' allowing the world to flicker and to fuse. It is now recombined in its very atoms, not merely in its visible and superficial parts. The writer is the first man to mop it and to form the natural objects it contains. Those berries there are edible. That speckled creature that bolted across my path might be tamed. That lake between those trees will be called Lake Opal or, more artistically, Dishwater Lake. That mist is a mountain—and that mountain must be conquered. Up a trackless slope climbs the master artist, and at the top, on a windy ridge, whom do you think he meets? The panting and happy reader, and there they spontaneously embrace and are linked forever if the book lasts forever.

      One evening at a remote provincial college through which I happened to be jogging on a protracted lecture tour, I suggested a little quiz—ten definitions of a reader, and from these ten the students had to choose four definitions that would combine to make a good reader. I have mislaid the list, but as far as I remember the definitions went something like this. Select four answers to the question what should a reader be to be a good reader:

      1. The reader should belong to a book club.
      2. The reader should identify himself or herself with the hero or heroine.
      3. The reader should concentrate on the social-economic angle.
      4. The reader should prefer a story with action and dialogue to one with none.
      5. The reader should have seen the book in a movie.
      6. The reader should be a budding author.
      7. The reader should have imagination.
      8. The reader should have memory.
      9. The reader should have a dictionary.
      10. The reader should have some artistic sense.

      The students leaned heavily on emotional identification, action, and the social-economic or historical angle. Of course, as you have guessed, the good reader is one who has imagination, memory, a dictionary, and some artistic sense--which sense I propose to develop in myself and in others whenever I have the chance.

      Incidentally, I use the word reader very loosely. Curiously enough, one cannot read a book: one can only reread it. A good reader, a major reader, an active and creative reader is a rereader. And I shall tell you why. When we read a book for the first time the very process of laboriously moving our eyes from left to right, line after line, page after page, this complicated physical work upon the book, the very process of learning in terms of space and time what the book is about, this stands between us and artistic appreciation. When we look at a painting we do not have to move our eyes in a special way even if, as in a book, the picture contains elements of depth and development. The element of time does not really enter in a first contact with a painting. In reading a book, we must have time to acquaint ourselves with it. We have no physical organ (as we have the eye in regard to a painting) that takes in the whole picture and then can enjoy its details. But at a second, or third, or fourth reading we do, in a sense, behave towards a book as we do towards a painting. However, let us not confuse the physical eye, that monstrous masterpiece of evolution, with the mind, an even more monstrous achievement. A book, no matter what it is—a work of fiction or a work of science (the boundary line between the two is not as clear as is generally believed)—a book of fiction appeals first of all to the mind. The mind, the brain, the top of the tingling spine, is, or should be, the only instrument used upon a book.

      Now, this being so, we should ponder the question how does the mind work when the sullen reader is confronted by the sunny book. First, the sullen mood melts away, and for better or worse the reader enters into the spirit of the game. The effort to begin a book, especially if it is praised by people whom the young reader secretly deems to be too old-fashioned or too serious, this effort is often difficult to make; but once it is made, rewards are various and abundant. Since the master artist used his imagination in creating his book, it is natural and fair that the consumer of a book should use his imagination too.

      There are, however, at least two varieties of imagination in the reader’s case. So let us see which one of the two is the right one to use in reading a book. First, there is the comparatively lowly kind which turns for support to the simple emotions and is of a definitely personal nature. (There are various subvarieties here, in this first section of emotional reading.) A situation in a book is intensely felt because it reminds us of something that happened to us or to someone we know or knew. Or, again, a reader treasures a book mainly because it evokes a country, a landscape, a mode of living which he nostalgically recalls as part of his own past. Or, and this is the worst thing a reader can do, he identifies himself with a character in the book. This lowly variety is not the kind of imagination I would like readers to use.

      So what is the authentic instrument to be used by the reader? It is impersonal imagination and artistic delight. What should be established, I think, is an artistic harmonious balance between the reader’s mind and the author’s mind. We ought to remain a little aloof and take pleasure in this aloofness while at the same time we keenly enjoy—passionately enjoy, enjoy with tears and shivers—the inner weave of a given masterpiece. To be quite objective in these matters is of course impossible. Everything that is worthwhile is to some extent subjective. For instance, you sitting there may be merely my dream, and I may be your nightmare. But what I mean is that the reader must know when and where to curb his imagination and this he does by trying to get clear the specific world the author places at his disposal. We must see things and hear things, we must visualize the rooms, the clothes, the manners of an author’s people. The color of Fanny Price’s eyes in Mansfield Park and the furnishing of her cold little room are important.

      We all have different temperaments, and I can tell you right now that the best temperament for a reader to have, or to develop, is a combination of the artistic and the scientific one. The enthusiastic artist alone is apt to be too subjective in his attitude towards a book, and so a scientific coolness of judgment will temper the intuitive heat. If, however, a would-be reader is utterly devoid of passion and patience—of an artist’s passion and a scientist’s patience—he will hardly enjoy great literature.



      Literature was born not the day when a boy crying wolf, wolf came running out of the Neanderthal valley with a big gray wolf at his heels: literature was born on the day when a boy came crying wolf, wolf and there was no wolf behind him. That the poor little fellow because he lied too often was finally eaten up by a real beast is quite incidental. But here is what is important. Between the wolf in the tall grass and the wolf in the tall story there is a shimmering go-between. That go-between, that prism, is the art of literature.

      Literature is invention. Fiction is fiction. To call a story a true story is an insult to both art and truth. Every great writer is a great deceiver, but so is that arch-cheat Nature. Nature always deceives. From the simple deception of propagation to the prodigiously sophisticated illusion of protective colors in butterflies or birds, there is in Nature a marvelous system of spells and wiles. The writer of fiction only follows Nature’s lead.

      Going back for a moment to our wolf-crying woodland little woolly fellow, we may put it this way: the magic of art was in the shadow of the wolf that he deliberately invented, his dream of the wolf; then the story of his tricks made a good story. When he perished at last, the story told about him acquired a good lesson in the dark around the camp fire. But he was the little magician. He was the inventor.

      There are three points of view from which a writer can be considered: he may be considered as a storyteller, as a teacher, and as an enchanter. A major writer combines these three—storyteller, teacher, enchanter—but it is the enchanter in him that predominates and makes him a major writer.

      To the storyteller we turn for entertainment, for mental excitement of the simplest kind, for emotional participation, for the pleasure of traveling in some remote region in space or time. A slightly different though not necessarily higher mind looks for the teacher in the writer. Propagandist, moralist, prophet—this is the rising sequence. We may go to the teacher not only for moral education but also for direct knowledge, for simple facts. Alas, I have known people whose purpose in reading the French and Russian novelists was to learn something about life in gay Paree or in sad Russia. Finally, and above all, a great writer is always a great enchanter, and it is here that we come to the really exciting part when we try to grasp the individual magic of his genius and to study the style, the imagery, the pattern of his novels or poems.

      The three facets of the great writer—magic, story, lesson—are prone to blend in one impression of unified and unique radiance, since the magic of art may be present in the very bones of the story, in the very marrow of thought. There are masterpieces of dry, limpid, organized thought which provoke in us an artistic quiver quite as strongly as a novel like Mansfield Park does or as any rich flow of Dickensian sensual imagery. It seems to me that a good formula to test the quality of a novel is, in the long run, a merging of the precision of poetry and the intuition of science. In order to bask in that magic a wise reader reads the book of genius not with his heart, not so much with his brain, but with his spine. It is there that occurs the telltale tingle even though we must keep a little aloof, a little detached when reading. Then with a pleasure which is both sensual and intellectual we shall watch the artist build his castle of cards and watch the castle of cards become a castle of beautiful steel and glass.
        
      (This essay was originally published in 1948. http://www.en.utexas.edu/amlit/amlitprivate/scans/goodre.html)"
  )

  Essay.create(
    title: "On Saving Time",
    user_id: User.find_by(username: "SenecaMinor").id,
    summary: "We shouldn't forget to save, not squander, our most valuable resource",
    image_url: "https://cdn-images-1.medium.com/fit/c/152/156/1*znib4IC6teZ4I2xDYDGr1Q.jpeg",
    body: "Set yourself free for your own sake; gather and save your time, which till lately has been forced from you, or filched away, or has merely slipped from your hands. Make yourself believe the truth of my words, – that certain moments are torn from us, that some are gently removed, and that others glide beyond our reach. The most disgraceful kind of loss, however, is that due to carelessness. Furthermore, if you will pay close heed to the problem, you will find that the largest portion of our life passes while we are doing ill, a goodly share while we are doing nothing, and the whole while we are doing that which is not to the purpose. What man can you show me who places any value on his time, who reckons the worth of each day, who understands that he is dying daily? For we are mistaken when we look forward to death; the major portion of death has already passed. Whatever years lie behind us are in death's hands.

      Therefore, do as you are doing: hold every hour in your grasp. Lay hold of to-day's task, and you will not need to depend so much upon tomorrow's. While we are postponing, life speeds by. Nothing is ours, except time. We were entrusted by nature with the ownership of this single thing, so fleeting and slippery that anyone who will can oust us from possession. What fools these mortals be! They allow the cheapest and most useless things, which can easily be replaced, to be charged in the reckoning, after they have acquired them; but they never regard themselves as in debt when they have received some of that precious commodity, – time! And yet time is the one loan which even a grateful recipient cannot repay.

      You may desire to know how I, who preach to you so freely, am practising. I confess frankly: my expense account balances, as you would expect from one who is free-handed but careful. I cannot boast that I waste nothing, but I can at least tell you what I am wasting, and the cause and manner of the loss; I can give you the reasons why I am a poor man. My situation, however, is the same as that of many who are reduced to slender means through no fault of their own: every one forgives them, but no one comes to their rescue.

      What is the state of things, then? It is this: I do not regard a man as poor, if the little which remains is enough for him. I advise you, however, to keep what is really yours; and you cannot begin too early. For, as our ancestors believed, it is too late to spare when you reach the dregs of the cask. Of that which remains at the bottom, the amount is slight, and the quality is vile.
        
      (Translated by Richard Gummere. https://en.wikisource.org/wiki/Moral_letters_to_Lucilius/Letter_1)"
  )

  Essay.create(
    title: "On Groundless Fears",
    user_id: User.find_by(username: "SenecaMinor").id,
    summary: "We are in the habit of exaggerating, or imagining, or anticipating, sorrow",
    image_url: "https://cdn-images-1.medium.com/fit/c/152/156/1*U3rNX59R-ryP5uSTGTrHaw.jpeg",
    body: "There are more things likely to frighten us than there are to crush us; we suffer more often in imagination than in reality. I am not speaking with you in the Stoic strain but in my milder style. For it is our Stoic fashion to speak of all those things, which provoke cries and groans, as unimportant and beneath notice; but you and I must drop such great-sounding words, although, Heaven knows, they are true enough. What I advise you to do is, not to be unhappy before the crisis comes; since it may be that the dangers before which you paled as if they were threatening you, will never come upon you; they certainly have not yet come. Accordingly, some things torment us more than they ought; some torment us before they ought; and some torment us when they ought not to torment us at all. We are in the habit of exaggerating, or imagining, or anticipating, sorrow.

      The first of these three faults may be postponed for the present, because the subject is under discussion and the case is still in court, so to speak. That which I should call trifling, you will maintain to be most serious; for of course I know that some men laugh while being flogged, and that others wince at a box on the ear. We shall consider later whether these evils derive their power from their own strength, or from our own weakness.

      Do me the favour, when men surround you and try to talk you into believing that you are unhappy, to consider not what you hear but what you yourself feel, and to take counsel with your feelings and question yourself independently, because you know your own affairs better than anyone else does. Ask: 'Is there any reason why these persons should condole with me? Why should they be worried or even fear some infection from me, as if troubles could be transmitted? Is there any evil involved, or is it a matter merely of ill report, rather than an evil?' Put the question voluntarily to yourself: 'Am I tormented without sufficient reason, am I morose, and do I convert what is not an evil into what is an evil?' You may retort with the question: 'How am I to know whether my sufferings are real or imaginary?' Here is the rule for such matters: We are tormented either by things present, or by things to come, or by both. As to things present, the decision is easy. Suppose that your person enjoys freedom and health, and that you do not suffer from any external injury. As to what may happen to it in the future, we shall see later on. Today there is nothing wrong with it. But,' you say, 'something will happen to it.'' First of all, consider whether your proofs of future trouble are sure. For it is more often the case that we are troubled by our apprehensions, and that we are mocked by that mocker, rumour, which is wont to settle wars, but much more often settles individuals. We agree too quickly with what people say. We do not put to the test those things which cause our fear; we do not examine into them; we blench and retreat just like soldiers who are forced to abandon their camp because of a dust-cloud raised by stampeding cattle, or are thrown into a panic by the spreading of some unauthenticated rumour. And somehow or other it is the idle report that disturbs us most. For truth has its own definite boundaries, but that which arises from uncertainty is delivered over to guesswork and the irresponsible license of a frightened mind. That is why no fear is so ruinous and so uncontrollable as panic fear. For other fears are groundless, but this fear is witless.

      Let us, then, look carefully into the matter. It is likely that some troubles will befall us; but it is not a present fact. How often has the unexpected happened! How often has the expected never come to pass! And even though it is ordained to be, what does it avail to run out to meet your suffering? You will suffer soon enough, when it arrives; so look forward meanwhile to better things. What shall you gain by doing this? Time. There will be many happenings meanwhile which will serve to postpone, or end, or pass on to another person, the trials which are near or even in your very presence. A fire has opened the way to flight. Men have been let down softly by a catastrophe. Sometimes the sword has been checked even at the victim's throat. Men have survived their own executioners. Even bad fortune is fickle. Perhaps it will come, perhaps not; in the meantime it is not. So look forward to better things.

      The mind at times fashions for itself false shapes of evil when there are no signs that point to any evil; it twists into the worst construction some word of doubtful meaning; or it fancies some personal grudge to be more serious than it really is, considering not how angry the enemy is, but to what lengths he may go if he is angry. But life is not worth living, and there is no limit to our sorrows, if we indulge our fears to the greatest possible extent; in this matter, let prudence help you, and contemn with a resolute spirit even when it is in plain sight. If you cannot do this, counter one weakness with another, and temper your fear with hope. There is nothing so certain among these objects of fear that it is not more certain still that things we dread sink into nothing and that things we hope for mock us.

      Accordingly, weigh carefully your hopes as well as your fears, and whenever all the elements are in doubt, decide in your own favour; believe what you prefer. And if fear wins a majority of the votes, incline in the other direction anyhow, and cease to harass your soul, reflecting continually that most mortals, even when no troubles are actually at hand or are certainly to be expected in the future, become excited and disquieted. No one calls a halt on himself, when he begins to be urged ahead; nor does he regulate his alarm according to the truth. No one says: 'The author of the story is a fool, and he who has believed it is a fool, as well as he who fabricated it. We let ourselves drift with every breeze; we are frightened at uncertainties, just as if they were certain. We observe no moderation. The slightest thing turns the scales and throws us forthwith into a panic.

      But I am ashamed either to admonish you sternly or to try to beguile you with such mild remedies. Let another say: 'Perhaps the worst will not happen. You yourself must say: 'Well, what if it does happen? Let us see who wins! Perhaps it happens for my best interests; it may be that such a death will shed credit upon my life. Socrates was ennobled by the hemlock draught. Wrench from Cato's hand his sword, the vindicator of liberty, and you deprive him of the greatest share of his glory. I am exhorting you far too long, since you need reminding rather than exhortation. The path on which I am leading you is not different from that on which your nature leads you; you were born to such conduct as I describe. Hence there is all the more reason why you should increase and beautify the good that is in you.

      But now, I have only to stamp the usual seal upon it, in other words, to commit thereto some noble message to be delivered to you: 'The fool, with all his other faults, has this also, – he is always getting ready to live.' 

      (Translated by Richard Gummere. https://en.wikisource.org/wiki/Moral_letters_to_Lucilius/Letter_13)"
  )

  Essay.create(
    title: "Advice to Youth",
    user_id: User.find_by(username: "MississippiSam").id,
    summary: "Always listen to your parents -- 'cuz if you don't, they'll probably make you",
    image_url: "https://cdn-images-1.medium.com/focal/100/100/82/38/1*BWiL6XaLxrY1-fm6BqLOwQ.jpeg",
    body: "Being told I would be expected to talk here, I inquired what sort of talk I ought to make. They said it should be something suitable to youth-something didactic, instructive, or something in the nature of good advice. Very well. I have a few things in my mind which I have often longed to say for the instruction of the young; for it is in one’s tender early years that such things will best take root and be most enduring and most valuable. First, then. I will say to you my young friends -- and I say it beseechingly, urgently --
    
    Always obey your parents, when they are present. This is the best policy in the long run, because if you don’t, they will make you. Most parents think they know better than you do, and you can generally make more by humoring that superstition than you can by acting on your own better judgment.
    
    Be respectful to your superiors, if you have any, also to strangers, and sometimes to others. If a person offend you, and you are in doubt as to whether it was intentional or not, do not resort to extreme measures; simply watch your chance and hit him with a brick. That will be sufficient. If you shall find that he had not intended any offense, come out frankly and confess yourself in the wrong when you struck him; acknowledge it like a man and say you didn’t mean to. Yes, always avoid violence; in this age of charity and kindliness, the time has gone by for such things. Leave dynamite to the low and unrefined.
    
    Go to bed early, get up early -- this is wise. Some authorities say get up with the sun; some say get up with one thing, others with another. But a lark is really the best thing to get up with. It gives you a splendid reputation with everybody to know that you get up with the lark; and if you get the right kind of lark, and work at him right, you can easily train him to get up at half past nine, every time -- it’s no trick at all.
    
    Now as to the matter of lying. You want to be very careful about lying; otherwise you are nearly sure to get caught. Once caught, you can never again be in the eyes to the good and the pure, what you were before. Many a young person has injured himself permanently through a single clumsy and ill finished lie, the result of carelessness born of incomplete training. Some authorities hold that the young out not to lie at all. That of course, is putting it rather stronger than necessary; still while I cannot go quite so far as that, I do maintain , and I believe I am right, that the young ought to be temperate in the use of this great art until practice and experience shall give them that confidence, elegance, and precision which alone can make the accomplishment graceful and profitable. Patience, diligence, painstaking attention to detail -- these are requirements; these in time, will make the student perfect; upon these only, may he rely as the sure foundation for future eminence. Think what tedious years of study, thought, practice, experience, went to the equipment of that peerless old master who was able to impose upon the whole world the lofty and sounding maxim that “Truth is mighty and will prevail” -- the most majestic compound fracture of fact which any of woman born has yet achieved. For the history of our race, and each individual’s experience, are sewn thick with evidences that a truth is not hard to kill, and that a lie well told is immortal. There is in Boston a monument of the man who discovered anesthesia; many people are aware, in these latter days, that that man didn’t discover it at all, but stole the discovery from another man. Is this truth mighty, and will it prevail? Ah no, my hearers, the monument is made of hardy material, but the lie it tells will outlast it a million years. An awkward, feeble, leaky lie is a thing which you ought to make it your unceasing study to avoid; such a lie as that has no more real permanence than an average truth. Why, you might as well tell the truth at once and be done with it. A feeble, stupid, preposterous lie will not live two years -- except it be a slander upon somebody. It is indestructible, then of course, but that is no merit of yours. A final word: begin your practice of this gracious and beautiful art early -- begin now. If I had begun earlier, I could have learned how.
    
    Never handle firearms carelessly. The sorrow and suffering that have been caused through the innocent but heedless handling of firearms by the young! Only four days ago, right in the next farm house to the one where I am spending the summer, a grandmother, old and gray and sweet, one of the loveliest spirits in the land, was sitting at her work, when her young grandson crept in and got down an old, battered, rusty gun which had not been touched for many years and was supposed not to be loaded, and pointed it at her, laughing and threatening to shoot. In her fright she ran screaming and pleading toward the door on the other side of the room; but as she passed him he placed the gun almost against her very breast and pulled the trigger! He had supposed it was not loaded. And he was right -- it wasn’t. So there wasn’t any harm done. It is the only case of that kind I ever heard of. Therefore, just the same, don’t you meddle with old unloaded firearms; they are the most deadly and unerring hings that have ever been created by man. You don’t have to take any pains at all with them; you don’t have to have a rest, you don’t have to have any sights on the gun, you don’t have to take aim, even. No, you just pick out a relative and bang away, and you are sure to get him. A youth who can’t hit a cathedral at thirty yards with a Gatling gun in three quarters of an hour, can take up an old empty musket and bag his grandmother every time, at a hundred. Think what Waterloo would have been if one of the armies had been boys armed with old muskets supposed not to be loaded, and the other army had been composed of their female relations. The very thought of it make one shudder.
    
    There are many sorts of books; but good ones are the sort for the young to read. remember that. They are a great, an inestimable, and unspeakable means of improvement. Therefore be careful in your selection, my young friends; be very careful; confine yourselves exclusively to Robertson’s Sermons, Baxter’s Saints' Rest, The Innocents Abroad, and works of that kind.
    
    But I have said enough. I hope you will treasure up the instructions which I have given you, and make them a guide to your feet and a light to your understanding. Build your character thoughtfully and painstakingly upon these precepts, and by and by, when you have got it built, you will be surprised and gratified to see how nicely and sharply it resembles everybody else’s.
    
    Originally written in 1882. http://people.virginia.edu/~jdk3t/TwainAY.htm)"
  )

  Essay.create(
    title: "The Innocents Abroad",
    user_id: User.find_by(username: "MississippiSam").id,
    summary: "There's nothing like an American overseas to lead right to that 'brutta figura'",
    image_url: "https://cdn-images-1.medium.com/max/400/1*FNhjBpWfLUFTBLfTm3XbWQ.jpeg",
    body: "If any man has a right to feel proud of himself, and satisfied, surely it is I. For I have written about the Coliseum, and the gladiators, the martyrs, and the lions, and yet have never once used the phrase ‘butchered to make a Roman holiday.’ I am the only free white man of mature age, who has accomplished this since Byron originated the expression.

      Butchered to make a Roman holiday sounds well for the first seventeen or eighteen hundred thousand times one sees it in print, but after that it begins to grow tiresome. I never felt so fervently thankful, so soothed, so tranquil, so filled with a blessed peace, as I did yesterday when I learned that Michael Angelo was dead.

      But we have taken it out of this guide. He has marched us through miles of pictures and sculpture in the vast corridors of the Vatican; and through miles of pictures and sculpture in twenty other palaces; he has shown us the great picture in the Sistine Chapel, and frescoes enough to frescoe the heavens--pretty much all done by Michael Angelo. So with him we have played that game which has vanquished so many guides for us--imbecility and idiotic questions. These creatures never suspect--they have no idea of a sarcasm.

      He shows us a figure and says: ‘Statoo brunzo.’ (Bronze statue.)

      We look at it indifferently and the doctor asks: ‘By Michael Angelo?’

      ‘No--not know who.’

      Then he shows us the ancient Roman Forum. The doctor asks: ‘Michael Angelo?’

      A stare from the guide. ‘No--thousan’ year before he is born.’

      Then an Egyptian obelisk. Again: ‘Michael Angelo?’

      ‘Oh, mon dieu, genteelmen! Zis is two thousan’ year before he is born!’

      He grows so tired of that unceasing question sometimes, that he dreads to show us any thing at all. The wretch has tried all the ways he can think of to make us comprehend that Michael Angelo is only responsible for the creation of a part of the world, but somehow he has not succeeded yet. Relief for overtasked eyes and brain from study and sightseeing is necessary, or we shall become idiotic sure enough. Therefore this guide must continue to suffer. If he does not enjoy it, so much the worse for him. We do.

      In this place I may as well jot down a chapter concerning those necessary nuisances, European guides. Many a man has wished in his heart he could do without his guide; but knowing he could not, has wished he could get some amusement out of him as a remuneration for the affliction of his society. We accomplished this latter matter, and if our experience can be made useful to others they are welcome to it.

      Guides know about enough English to tangle every thing up so that a man can make neither head or tail of it. They know their story by heart--the history of every statue, painting, cathedral or other wonder they show you. They know it and tell it as a parrot would--and if you interrupt, and throw them off the track, they have to go back and begin over again. All their lives long, they are employed in showing strange things to foreigners and listening to their bursts of admiration. It is human nature to take delight in exciting admiration. It is what prompts children to say ‘smart’ things, and do absurd ones, and in other ways ‘show off’ when company is present. It is what makes gossips turn out in rain and storm to go and be the first to tell a startling bit of news. Think, then, what a passion it becomes with a guide, whose privilege it is, every day, to show to strangers wonders that throw them into perfect ecstasies of admiration! He gets so that he could not by any possibility live in a soberer atmosphere. After we discovered this, we never went into ecstasies any more--we never admired any thing--we never showed any but impassible faces and stupid indifference in the presence of the sublimest wonders a guide had to display. We had found their weak point. We have made good use of it ever since. We have made some of those people savage, at times, but we have never lost our own serenity.
      
      The doctor asks the questions, generally, because he can keep his countenance, and look more like an inspired idiot, and throw more imbecility into the tone of his voice than any man that lives. It comes natural to him.

      The guides in Genoa are delighted to secure an American party, because Americans so much wonder, and deal so much in sentiment and emotion before any relic of Columbus. Our guide there fidgeted about as if he had swallowed a spring mattress. He was full of animation--full of impatience. He said:
      
      ‘Come wis me, genteelmen!--come! I show you ze letter writing by Christopher Colombo!--write it himself!--write it wis his own hand!--come!’

      He took us to the municipal palace. After much impressive fumbling of keys and opening of locks, the stained and aged document was spread before us. The guide’s eyes sparkled. He danced about us and tapped the parchment with his finger:

      ‘What I tell you, genteelmen! Is it not so? See! handwriting Christopher Colombo!--write it himself!’

      We looked indifferent--unconcerned. The doctor examined the document very deliberately, during a painful pause.--Then he said, without any show of interest:

      ‘Ah--Ferguson--what--what did you say was the name of the party who wrote this?’
      ‘Christopher Colombo! ze great Christopher Colombo!’

      Another deliberate examination.

      ‘Ah--did he write it himself; or--or how?’
      ‘He write it himself!--Christopher Colombo! He’s own hand-writing, write by himself!’

      Then the doctor laid the document down and said:
      
      ‘Why, I have seen boys in America only fourteen years old that could write better than that.’
      ‘But zis is ze great Christo--’
      ‘I don’t care who it is! It’s the worst writing I ever saw. Now you musn’t think you can impose on us because we are strangers. We are not fools, by a good deal. If you have got any specimens of penmanship of real merit, trot them out!--and if you haven’t, drive on!’

      We drove on. The guide was considerably shaken up, but he made one more venture. He had something which he thought would overcome us. He said:

      ‘Ah, genteelmen, you come wis me! I show you beautiful, O, magnificent bust Christopher Colombo!--splendid, grand, magnificent!’

      He brought us before the beautiful bust--for it was beautiful--and sprang back and struck an attitude:

      ‘Ah, look, genteelmen!--beautiful, grand,--bust Christopher Colombo!--beautiful bust, beautiful pedestal!’

      The doctor put up his eye-glass--procured for such occasions:

      ‘Ah--what did you say this gentleman’s name was?’
      ‘Christopher Colombo!--ze great Christopher Colombo!’
      ‘Christopher Colombo--the great Christopher Colombo. Well, what did he do?’
      ‘Discover America!--discover America, Oh, ze devil!’
      ‘Discover America. No--that statement will hardly wash. We are just from America ourselves. We heard nothing about it. Christopher Colombo--pleasant name--is--is he dead?’
      ‘Oh, corpo di Baccho!--three hundred year!’
      ‘What did he die of?’
      ‘I do not know!--I can not tell.’
      ‘Small-pox, think?’
      ‘I do not know, genteelmen!--I do not know what he die of!’
      ‘Measles, likely?’
      ‘May be--may be--I do not know--I think he die of somethings.’
      ‘Parents living?’
      ‘Im-poseeeble!’
      ‘Ah--which is the bust and which is the pedestal?’
      ‘Santa Maria!--zis ze bust!--zis ze pedestal!’
      ‘Ah, I see, I see--happy combination--very happy combination, indeed. Is--is this the first time this gentleman was ever on a bust?’

      That joke was lost on the foreigner--guides can not master the subtleties of the American joke.

      We have made it interesting for this Roman guide. Yesterday we spent three or four hours in the Vatican, again, that wonderful world of curiosities. We came very near expressing interest, sometimes--even admiration--it was very hard to keep from it. We succeeded though. Nobody else ever did, in the Vatican museums. The guide was bewildered--non-plussed. He walked his legs off, nearly, hunting up extraordinary things, and exhausted all his ingenuity on us, but it was a failure; we never showed any interest in any thing. He had reserved what he considered to be his greatest wonder till the last--a royal Egyptian mummy, the best preserved in the world, perhaps. He took us there. He felt so sure, this time, that some of his old enthusiasm came back to him:

      ‘See, genteelmen!--Mummy! Mummy!’

      The eye-glass came up as calmly, as deliberately as ever.

      ‘Ah,--Ferguson--what did I understand you to say the gentleman’s name was?’
      ‘Name?--he got no name!--Mummy!--’Gyptian mummy!’
      ‘Yes, yes. Born here?’
      ‘No! ‘Gyptian mummy!’
      ‘Ah, just so. Frenchman, I presume?’
      ‘No!--not Frenchman, not Roman!--born in Egypta!’
      ‘Born in Egypta. Never heard of Egypta before. Foreign locality, likely. Mummy--mummy. How calm he is--how self-possessed. Is, ah--is he dead?’
      ‘Oh, sacre bleu, been dead three thousan’ year!’

      The doctor turned on him savagely:
      
      ‘Here, now, what do you mean by such conduct as this! Trying to impose your vile second-hand carcasses on us!--thunder and lightning, I’ve a notion to--to--if you’ve got a nice fresh corpse, fetch him out!--or by George we’ll brain you!’

      We make it exceedingly interesting for this Frenchman. However, he has paid us back, partly, without knowing it. He came to the hotel this morning to ask if we were up, and he endeavored as well as he could to describe us, so that the landlord would know which persons he meant. He finished with the casual remark that we were lunatics. The observation was so innocent and so honest that it amounted to a very good thing for a guide to say.

      There is one remark (already mentioned,) which never yet has failed to disgust these guides. We use it always, when we can think of nothing else to say. After they have exhausted their enthusiasm pointing out to us and praising the beauties of some ancient bronze image or broken-legged statue, we look at it stupidly and in silence for five, ten, fifteen minutes--as long as we can hold out, in fact--and then ask:

      ‘Is--is he dead?’

      That conquers the serenest of them. It is not what they are looking for--especially a new guide. Our Roman Ferguson is the most patient, unsuspecting, long-suffering subject we have had yet. We shall be sorry to part with him. We have enjoyed his society very much. We trust he has enjoyed ours, but we are harassed with doubts.

      (Originally published in 1869 in 'The Innocents Abroad')"
  )

   Essay.create(
    title: "Pain Over Pleasure? Following Cicero's Advice",
    user_id: User.find_by(username: "UserDemo").id,
    summary: "An ancient Roman author has something to say about the blind pursuit of happiness",
    image_url: "",
    body: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
  )

  Essay.create(
    title: "Draft One",
    user_id: User.find_by(username: "UserDemo").id,
    summary: "",
    image_url: "",
    body: "(This is just a draft; I'm not sure exactly what I want to say about this issue yet.)"
  )

    Essay.create(
    title: "How People Perceive Color Around the World",
    user_id: User.find_by(username: "UserDemo").id,
    summary: "We don't all know the same Roy G. Biv",
    image_url: "https://cdn-images-1.medium.com/max/400/1*FNhjBpWfLUFTBLfTm3XbWQ.jpeg",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  )
end

ActiveRecord::Base.transaction do

  seed_1 = Essay.find_by(title: 'Transnational America')
  seed_1.update(
    published: true,
    published_at: Time.now,
    featured: true
  )

  ##  Essay.find_by(title: 'Transnational America').feature

  seed_2 = Essay.find_by(title: "The Origin of Love")
  seed_2.update(
    published: true,
    published_at: Time.now,
    featured: true
  )
  
  ##  Essay.find_by(title: "The Origin of Love").feature

  seed_3 = Essay.find_by(title: "Crowds, Spectacles, and Other Reasons You Should Just Stay At Home")
  seed_3.update( 
    published: true,
    published_at: Time.now,
  )
  ##  Essay.find_by(title: "The Origin of Love").feature

  seed_4 = Essay.find_by(title: "Good Readers and Good Writers")
  seed_4.update(
    published: true,
    published_at: Time.now,
    featured: true
  )
  
  ##  Essay.find_by(title: "Good Readers and Good Writers").feature

  seed_5 = Essay.find_by(title: "On Saving Time")
  seed_5.update(
    published: true,
    published_at: Time.now,
    featured: true
  )
  ##  Essay.find_by(title: "On Saving Time").feature

  seed_6 = Essay.find_by(title: "On Groundless Fears")
  seed_6.update(
    published: true,
    published_at: Time.now
  )
  ##  Essay.find_by(title: "On Groundless Fears").feature

  seed_7 = Essay.find_by(title: "The Innocents Abroad")
  seed_7.update(
    published: true,
    published_at: Time.now,
    featured: true
  )

  ##  Essay.find_by(title: "The Innocents Abroad").feature

  seed_8 = Essay.find_by(title: "Advice to Youth")
  seed_8.update(
    published: true,
    published_at: Time.now
  )
  ##  Essay.find_by(title: "Advice to Youth").feature

  seed_9 = Essay.find_by(title: "How People Perceive Color Around the World")
  seed_9.update(
    published: true,
    published_at: Time.now,
    featured: true
  )
  
end

nab = Essay.find_by(title: "Good Readers and Good Writers")
nab.image_url = "https://cdn-images-1.medium.com/fit/c/152/156/0*F2KoTRu8rUDJUmUI."
nab.save!

 seed_9 = Essay.find_by(title: "How People Perceive Color Around the World")
seed_9.update(
  featured: false
)

=end

## Up to this point is current in my database and on Heroku

ActiveRecord::Base.transaction do
 
end
