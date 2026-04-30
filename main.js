<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
      rel="stylesheet"
    />
/*<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
       <link rel="stylesheet" href="style.css" />*/
    <title>To Tziavaeri</title>
  </head>
<body>
    <header class="header">
  <nav>
    <div class="nav__header">
      <div class="nav__logo">
        <a href="index.html">
          <img src="assets/logo.jpg" alt="logo" class="nav__logo" />
        </a>
      </div>
      <div class="nav__menu__btn" id="menu-btn">
        <i class="ri-menu-line"></i>
      </div>
    </div>

    <ul class="nav__links" id="nav-links">
      <li><a href="menu.html">MENU</a></li>
      <li><a href="index.html#contact">RESERVATIONS</a></li>
    </ul>
  </nav>
</header>




<section class="menu" id="menu">
  <div class="section__container menu__container">
    
    <h3>MENU</h3>
    
    <h2 class="section__header">
      Ask us about the fish of the day
    </h2>

  </div>
</section>





<section class="menu-categories">

  <!-- Σειρά 1: 4 κατηγορίες -->
  <a class="cat" data-target="orektika">
    <img src="assets/orektika.png" alt="">
    <h3>Ορεκτικά</h3>
  </a>
  <a class="cat" data-target="psarika">
    <img src="assets/psarika.png" alt="">
    <h3>Ψαρικά</h3>
  </a>
  <a class="cat" data-target="glyka">
    <img src="assets/glyka.png" alt="">
    <h3>Γλυκά</h3>
  </a>
  <a class="cat" data-target="kreatika">
    <img src="assets/kreatika.png" alt="">
    <h3>Κρεατικά</h3>
  </a>

  <!-- Σειρά 2: 4 κατηγορίες -->
  <a class="cat" data-target="makaronades">
    <img src="assets/makaronades.png" alt="">
    <h3>Μακαρονάδες</h3>
  </a>
  <a class="cat" data-target="salates">
    <img src="assets/salates.png" alt="">
    <h3>Σαλάτες</h3>
  </a>
  <a class="cat" data-target="rofimata">
    <img src="assets/rofimata.png" alt="">
    <h3>Ροφήματα</h3>
  </a>
  <a class="cat" data-target="aloifes">
    <img src="assets/aloifi.png" alt="">
    <h3>Αλοιφές</h3>
  </a>

  <!-- Σειρά 3: 3 κατηγορίες — κεντραρισμένες με offset -->
  <div class="cat-row-last">
    <a class="cat" data-target="tyria">
      <img src="assets/tyri.png" alt="">
      <h3>Τυριά</h3>
    </a>
    <a class="cat" data-target="paradosiaka">
      <img src="assets/paradosiako.png" alt="">
      <h3>Παραδοσιακά</h3>
    </a>
    <a class="cat" data-target="almyra">
      <img src="assets/almuro.png" alt="">
      <h3>Αλμυρά</h3>
    </a>
  </div>

</section>


<section class="menu-list">
 
  <!-- ΟΡΕΚΤΙΚΑ -->
  <div id="orektika" class="menu-section">
    <h2>ορεκτικά / starters</h2>
 
    <div class="menu-item">
      <div class="item-gr">Ψωμί - Πίτες <span>1.50€</span></div>
      <div class="item-en">Bread - Pita</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Χειροποίητη πίτα ημέρας <span>......</span></div>
      <div class="item-en">Homemade pie of the day</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Γιαπράκια <span>7.00€</span></div>
      <div class="item-en">Stuffed vine leaves</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Παστουρμαδοπιτάκια <span>7.50€</span></div>
      <div class="item-en">Pastourma small pies</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Κεφτεδάκια <span>7.50€</span></div>
      <div class="item-en">Meatballs</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Πατάτες τηγανητές <span>4.50€</span></div>
      <div class="item-en">French fries</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Κολοκυθάκια τηγανητά <span>6.00€</span></div>
      <div class="item-en">Fried zucchini</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Γαριδάκι <span>9.00€</span></div>
      <div class="item-en">Baby shrimps fried</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Γαρίδες σαγανάκι <span>11.00€</span></div>
      <div class="item-en">Shrimps saganaki (shrimps, tomato sauce, feta)</div>
    </div>
  </div>
 
 
  <!-- ΑΛΟΙΦΕΣ / DIPS -->
  <div id="aloifes" class="menu-section">
    <h2>αλοιφές / dips</h2>
 
    <div class="menu-item">
      <div class="item-gr">Μελιτζανοσαλάτα <span>5.00€</span></div>
      <div class="item-en">Eggplant salad</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Τζατζίκι <span>4.50€</span></div>
      <div class="item-en">Tzatziki</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Ταραμάς / ταραμάς με αυγοτάραχο <span>5.00€ / 8.50€</span></div>
      <div class="item-en">Fish roe salad / fish roe salad with bottarga</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Τυροκαυτερή <span>4.50€</span></div>
      <div class="item-en">Spicy feta cheese spread</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Φάβα <span>6.00€</span></div>
      <div class="item-en">Traditional fava beans puree with onion and capers</div>
    </div>
  </div>
 
 
  <!-- ΤΥΡΙΑ / CHEESE -->
  <div id="tyria" class="menu-section">
    <h2>τυριά / cheese</h2>
 
    <div class="menu-item">
      <div class="item-gr">Σαγανάκι <span>5.50€</span></div>
      <div class="item-en">Saganaki (fried cheese)</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Φέτα λαδορίγανη <span>5.50€</span></div>
      <div class="item-en">Feta with olive oil and oregano</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Μπουγιουρντί <span>7.00€</span></div>
      <div class="item-en">Bouyiourdi (spicy baked feta with tomato sauce and peppers)</div>
    </div>
  </div>
 
 
  <!-- ΣΑΛΑΤΕΣ / SALADS -->
  <div id="salates" class="menu-section">
    <h2>σαλάτες / salads</h2>
 
    <div class="menu-item">
      <div class="item-gr">Τζιβαέρι (παντζάρι, μήλο, καρότο, καρύδι) <span>8.50€</span></div>
      <div class="item-en">Tzivaeri (beetroot, apple, carrot, walnut)</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Χωριάτικη <span>8.50€</span></div>
      <div class="item-en">All times classic Greek salad</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Ρεγγοσαλάτα (ντομάτα, κρεμμύδι, πιπεριά, κάπαρη, ρέγγα) <span>9.00€</span></div>
      <div class="item-en">Herring salad (tomato, onion, pepper, caper, herring)</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Πολίτικη (λάχανο, καρότο, σκόρδο) <span>7.50€</span></div>
      <div class="item-en">Politiki (cabbage, carrot, garlic)</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Χόρτα <span>6.00€</span></div>
      <div class="item-en">Boiled wild greens</div>
    </div>
  </div>
 
 
  <!-- ΠΑΡΑΔΟΣΙΑΚΑ / TRADITIONAL -->
  <div id="paradosiaka" class="menu-section">
    <h2>παραδοσιακά / traditional</h2>
 
    <div class="menu-item">
      <div class="item-gr">Μουσακάς <span>13.00€</span></div>
      <div class="item-en">Mousaka</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Γίγαντες <span>8.00€</span></div>
      <div class="item-en">Giant beans oven baked in tomato sauce</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Πιάτο ημέρας <span>......</span></div>
      <div class="item-en">Today's Special</div>
    </div>
  </div>
 
 
  <!-- ΘΑΛΑΣΣΙΝΑ & ΨΑΡΙ / SEAFOOD & FISH -->
  <div id="psarika" class="menu-section">
    <h2>θαλασσινά & ψάρι / seafood & fish</h2>
 
    <div class="menu-item">
      <div class="item-gr">Μύδια αχνιστά <span>14.00€</span></div>
      <div class="item-en">Steamed mussels</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Καλαμάρι τηγανητό <span>15.00€</span></div>
      <div class="item-en">Fried calamari</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Γαρίδες ψητές <span>14.00€</span></div>
      <div class="item-en">Jumbo shrimps grilled</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Χταπόδι ψητό <span>16.00€</span></div>
      <div class="item-en">Grilled octopus with pickled veggies</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Τσιπούρα (μερίδα / κιλό) <span>17.00€ / 40.00€</span></div>
      <div class="item-en">Sea bream (portion/kilo)</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Λαβράκι (μερίδα / κιλό) <span>19.00€ / 45.00€</span></div>
      <div class="item-en">Sea bass (portion/kilo)</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Φαγκρί (μερίδα / κιλό) <span>22.00€ / 50.00€</span></div>
      <div class="item-en">Red porgy (portion/kilo)</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Σαρδέλες ψητές <span>12.00€</span></div>
      <div class="item-en">Grilled sardines</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Μερίδα ψαράκι ψιλό <span>11.00€</span></div>
      <div class="item-en">Portion of small fish</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Ψάρι ημέρας <span>......</span></div>
      <div class="item-en">Fish of the day</div>
    </div>
  </div>
 
 
  <!-- ΑΛΜΥΡΑ / SAVORY -->
  <div id="almyra" class="menu-section">
    <h2>αλμυρά / savory</h2>
 
    <div class="menu-item">
      <div class="item-gr">Ρέγγα <span>6.50€</span></div>
      <div class="item-en">Herring fish</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Αντζούγιες <span>6.50€</span></div>
      <div class="item-en">Salty anchovies</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Γαύρος μαρινάτος <span>6.50€</span></div>
      <div class="item-en">Anchovies marinated</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Χταπόδι ξυδάτο <span>12.00€</span></div>
      <div class="item-en">Octopus marinated in vinegar</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Μπρουσκέτες μεσογειακές <span>11.00€</span></div>
      <div class="item-en">Mediterranean bruschettas (grilled bread, tomato, herbs, paste, savory fish)</div>
    </div>
  </div>
 
 
  <!-- ΚΡΕΑΤΙΚΑ / MEAT -->
  <div id="kreatika" class="menu-section">
    <h2>κρεατικά / meat</h2>
 
    <div class="menu-item">
      <div class="item-gr">Χοιρινά κοψίδια (μερίδα / κιλό) <span>9.50€ / 26.00€</span></div>
      <div class="item-en">Boneless pork chops (portion/kilo)</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Κοτόπουλο παϊδάκια (μερίδα / κιλό) <span>9.50€ / 26.00€</span></div>
      <div class="item-en">Chicken ribs (portion/kilo)</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Συκώτι μοσχαρίσιο <span>9.00€</span></div>
      <div class="item-en">Beef liver</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Λουκάνικο προβείο με γραβιέρα <span>9.00€</span></div>
      <div class="item-en">Sheep sausage with local cheese</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Μπιφτέκι προβατίνας <span>10.50€</span></div>
      <div class="item-en">Grilled sheep patty</div>
    </div>
  </div>
 
 
  <!-- ΜΑΚΑΡΟΝΑΔΕΣ / PASTA -->
  <div id="makaronades" class="menu-section">
    <h2>μακαρονάδες / pasta</h2>
 
    <div class="menu-item">
      <div class="item-gr">Μακαρονάδα του φτωχού (σκόρδο, λάδι, μπούκοβο) <span>9.00€</span></div>
      <div class="item-en">Pasta aglio e olio (garlic, oil, chilli flakes)</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Ζυμαρικά με άγρια μανιτάρια & τρούφα <span>17.00€</span></div>
      <div class="item-en">Pasta with wild mushrooms & truffle</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Χωριάτικη μακαρονάδα με κιμά λουκάνικου <span>13.00€</span></div>
      <div class="item-en">Country-style pasta with sausage mince</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Γαριδομακαρονάδα <span>17.00€</span></div>
      <div class="item-en">Shrimps linguine</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Αστακομακαρονάδα (κατόπιν παραγγελίας) <span>......</span></div>
      <div class="item-en">Lobster pasta (upon request)</div>
    </div>
  </div>
 
 
  <!-- ΓΛΥΚΑ / SWEETS -->
  <div id="glyka" class="menu-section">
    <h2>γλυκά / sweets</h2>
 
    <div class="menu-item">
      <div class="item-gr">Πορτοκαλόπιτα / με παγωτό <span>6.00€ / 7.50€</span></div>
      <div class="item-en">Orange pie / with ice cream</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Λεμονόπιτα <span>7.00€</span></div>
      <div class="item-en">Lemon pie</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Σουφλέ σοκολάτας <span>7.00€</span></div>
      <div class="item-en">Chocolate soufflé</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Γιαούρτι με μέλι & καρύδια <span>5.50€</span></div>
      <div class="item-en">Yoghurt with honey & walnuts</div>
    </div>
 
    <div class="menu-item">
      <div class="item-gr">Μπάλα παγωτό βανίλια <span>2.50€</span></div>
      <div class="item-en">Ice cream scoop vanilla</div>
    </div>
  </div>
 
 
  <div id="rofimata" class="menu-section">
  
 <h2>καφέδες / café</h2>

  <div class="menu-item">
    <div class="item-gr">Ελληνικός <span>2.50€</span></div>
    <div class="item-en">Greek coffee</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Φραπέ <span>3.50€</span></div>
    <div class="item-en">Frape</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Espresso <span>3.00€</span></div>
    <div class="item-en">Espresso</div>
  </div>

  <h2>αναψυκτικά / soft drinks</h2>

  <div class="menu-item">
    <div class="item-gr">Αναψυκτικά <span>2.50€</span></div>
    <div class="item-en">Soft drinks</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Κρύο τσάι <span>3.00€</span></div>
    <div class="item-en">Ice tea</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Ανθρακούχο νερό 750ml <span>4.50€</span></div>
    <div class="item-en">Sparkling water 750ml</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Νερό 1lt <span>1.50€</span></div>
    <div class="item-en">Water 1ltr</div>
  </div>

  <h2>μπύρες / beer</h2>

  <div class="menu-item">
    <div class="item-gr">Alfa / Alfa Free <span>3.50€ / 4.00€</span></div>
    <div class="item-en">Alfa / Alfa Free</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Amstel <span>3.50€</span></div>
    <div class="item-en">Amstel</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Mamos <span>4.50€</span></div>
    <div class="item-en">Mamos</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Kaiser <span>4.50€</span></div>
    <div class="item-en">Kaiser</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Weiss <span>5.50€</span></div>
    <div class="item-en">Weiss</div>
  </div>



<h2>ούζο - τσίπουρο / ouzo - tsipouro</h2>

  <div class="menu-item">
    <div class="item-gr">Γιοκαρίνης <span>14.00€</span></div>
    <div class="item-en">Giokarinis</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Ήρα απόσταγμα <span>9.00€</span></div>
    <div class="item-en">Hera distillate</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Φρατζέσκος <span>9.00€</span></div>
    <div class="item-en">Fratzeskos</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Φρατζέσκος Απόσταγμα <span>11.00€</span></div>
    <div class="item-en">Fratzeskos distillate</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Μαύρο Ρόδο <span>10.00€</span></div>
    <div class="item-en">Mavro Rodo</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Ηδωνικό <span>11.50€</span></div>
    <div class="item-en">Idoniko</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Αποστολάκη / γλυκάνισο <span>10.00€ / 11.00€</span></div>
    <div class="item-en">Apostolaki / with anise</div>
  </div>

  <h2>λευκό κρασί / white wine</h2>

  <div class="menu-item">
    <div class="item-gr">ΕΟΣΣ χύμα 0,5ltr <span>6.00€</span></div>
    <div class="item-en">Samos wine 0,5ltr</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Σεκ <span>6.00€</span></div>
    <div class="item-en">Sek</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Πλατανιώτικο <span>6.50€</span></div>
    <div class="item-en">Plataniotiko</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Ρετσίνα <span>6.00€</span></div>
    <div class="item-en">Retsina</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Ψηλές Κορφές <span>17.00€</span></div>
    <div class="item-en">Psiles Korfes</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Ρόγια <span>27.00€</span></div>
    <div class="item-en">Roya</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Βαβέλ <span>22.00€</span></div>
    <div class="item-en">Vavel</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Βίβλια Χώρα <span>34.00€</span></div>
    <div class="item-en">Vivlia Chora</div>
  </div>

  <h2>ροζέ κρασί / rosé wine</h2>

  <div class="menu-item">
    <div class="item-gr">ΕΟΣΣ χύμα 0,5ltr <span>6.00€</span></div>
    <div class="item-en">Samos wine 0,5ltr</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Πλάτανος Μανδηλάρι <span>7.00€</span></div>
    <div class="item-en">Platanos Mandilari</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Φοκιανός <span>6.00€</span></div>
    <div class="item-en">Fokianos</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Βαβέλ <span>24.00€</span></div>
    <div class="item-en">Vavel</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Κρατήρας <span>26.00€</span></div>
    <div class="item-en">Kratiras</div>
  </div>

  <h2>κόκκινο κρασί / red wine</h2>

  <div class="menu-item">
    <div class="item-gr">ΕΟΣΣ χύμα 0,5ltr <span>6.00€</span></div>
    <div class="item-en">Samos wine 0,5ltr</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Ημίγλυκο χύμα 0,5ltr <span>6.50€</span></div>
    <div class="item-en">Semi-sweet 0,5ltr</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Κατώγι <span>24.00€</span></div>
    <div class="item-en">Katoyi</div>
  </div>

  <div class="menu-item">
    <div class="item-gr">Βίβλια Χώρα <span>38.00€</span></div>
    <div class="item-en">Vivlia Chora</div>
  </div>
</div>
 
</section>













 <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__logo">
       <!--  <img
        src="assets/xtapodi.webp"
        alt="reservation"
        class="reservation__bg-1"
      />-->
        </div>
        <div class="footer__content">
          <p>
            TRADITIONAL TAVERN
          </p>
          <div>
            <ul class="footer__links">
              <li>
                <span><i class="ri-map-pin-2-fill"></i></span>
                Κων/νου Κανάρη, Νέο Καρλόβασι 832 00
              </li>
              <li>
                <span><i class="ri-phone-fill"></i></span>
                2273 032637
              </li>
            </ul>
        <div class="footer__socials">
             
              <a href="https://www.instagram.com/to_tzivaeri_samos"><i class="ri-instagram-fill"></i></a>              <a href="https://wa.me/306978408174"><i class="ri-whatsapp-fill"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2026 "Το Τζιβαέρι". All rights reserved.
      </div>
    </footer>

 
       <script src="https://unpkg.com/scrollreveal"></script>
      <script src="main.js"></script>
    </body>
   </html>
