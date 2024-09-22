let questions = [
    {
        numb: 1,
        question: "Quelle est la méthode JavaScript utilisée pour sélectionner un élément par son ID ?",
        answer: "A. getElementById()",
        options: [
            "A. getElementById()",
            "B. selectElementById()",
            "C. findElementById()",
            "D. queryElementById()"
        ]
    },
    {
        numb: 2,
        question: "Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d’un tableau ?",
        answer: "A. pop()",
        options: [
            "A. pop()",
            "B. removeLast()",
            "C. deleteLast()",
            "D. splice()"
        ]
    },
    {
        numb: 3,
        question: "Quel est le symbole utilisé pour les commentaires sur une seule ligne en JavaScript ?",
        answer: "A. //",
        options: [
            "A. //",
            "B. --",
            "C. /*",
            "D. ‘"
        ]
    },
    {
        numb: 4,
        question: "Quelle est la valeur de l’expression `5 == «5»` en JavaScript ?",
        answer: "A. true",
        options: [
            "A. true",
            "B. false",
            "C. erreur",
            "D. 5"
        ]
    },
    {
        numb: 5,
        question: "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d’un tableau ?",
        answer: "A. push()",
        options: [
            "A. push()",
            "B. append()",
            "C. addToEnd()",
            "D. insertLast()"
        ]
    },
    {
        numb: 6,
        question: "Quelle méthode JavaScript est utilisée pour obtenir la longueur d’une chaîne de caractères ?",
        answer: "A. length()",
        options: [
            "A. length()",
            "B. count()",
            "C. size()",
            "D. strlen()"
        ]
    },
    {
        numb: 7,
        question: "Quelle est la fonction JavaScript utilisée pour convertir une chaîne en minuscules ?",
        answer: "A. toLowerCase()",
        options: [
            "A. toLowerCase()",
            "B. toLower()",
            "C. lowerCase()",
            "D. changeCaseToLower()"
        ]
    },
    {
        numb: 8,
        question: "Quelle est la fonction JavaScript utilisée pour arrondir un nombre à l’entier le plus proche ?",
        answer: "A. round()",
        options: [
            "A. round()",
            "B. ceil()",
            "C. floor()",
            "D. toInt()"
        ]
    },
    {
        numb: 9,
        question: "Quel est le résultat de l’opération `10 % 3` en JavaScript ?",
        answer: "A. 1",
        options: [
            "A. 1",
            "B. 3",
            "C. 0",
            "D. 2"
        ]
    },
    {
        numb: 10,
        question: "Quelle méthode JavaScript est utilisée pour concaténer deux tableaux ?",
        answer: "A. concat()",
        options: [
            "A. concat()",
            "B. combine()",
            "C. merge()",
            "D. join()"
        ]
    },
    {
        numb: 11,
        question: "Quelle est la fonction JavaScript utilisée pour générer un nombre aléatoire entre 0 et 1 ?",
        answer: "A. random()",
        options: [
            "A. random()",
            "B. generateRandom()",
            "C. randomNumber()",
            "D. rand()"
        ]
    },
    {
        numb: 12,
        question: "Quelle méthode JavaScript est utilisée pour supprimer un élément d’un tableau à une position donnée ?",
        answer: "C. splice()",
        options: [
            "A. delete()",
            "B. removeAt()",
            "C. splice()",
            "D. removeFrom()"
        ]
    },
    {
        numb: 13,
        question: "Quelle est la fonction JavaScript utilisée pour convertir une chaîne en majuscules ?",
        answer: "A. toUpperCase()",
        options: [
            "A. toUpperCase()",
            "B. upperCase()",
            "C. makeUpperCase()",
            "D. changeCaseToUpper()"
        ]
    },
    {
        numb: 14,
        question: "Quelle est la méthode JavaScript utilisée pour inverser l’ordre des éléments dans un tableau ?",
        answer: "A. reverse()",
        options: [
            "A. reverse()",
            "B. invert()",
            "C. flip()",
            "D. switch()"
        ]
    },
    {
        numb: 15,
        question: "Quelle méthode JavaScript est utilisée pour diviser une chaîne en un tableau de sous-chaînes en fonction d’un séparateur ?",
        answer: "A. split()",
        options: [
            "A. split()",
            "B. divide()",
            "C. separate()",
            "D. slice()"
        ]
    },
    {
        numb: 16,
        question: "Quelle est la valeur de l’expression `true && false` en JavaScript ?",
        answer: "B. false",
        options: [
            "A. true",
            "B. false",
            "C. null",
            "D. erreur"
        ]
    },
    {
        numb: 17,
        question: "Quelle est la méthode JavaScript utilisée pour vérifier si un élément existe dans un tableau ?",
        answer: "C. includes()",
        options: [
            "A. contains()",
            "B. check()",
            "C. includes()",
            "D. exists()"
        ]
    },
    {
        numb: 18,
        question: "Quelle est la fonction JavaScript utilisée pour convertir une chaîne en nombre entier ?",
        answer: "A. parseInt()",
        options: [
            "A. parseInt()",
            "B. toInt()",
            "C. convertToInt()",
            "D. strToInt()"
        ]
    },
    {
        numb: 19,
        question: "Quelle méthode JavaScript est utilisée pour trier les éléments d’un tableau ?",
        answer: "A. sort()",
        options: [
            "A. sort()",
            "B. order()",
            "C. arrange()",
            "D. organize()"
        ]
    },
    {
        numb: 20,
        question: "Quelle est la valeur de l’expression `2 + «2»` en JavaScript ?",
        answer: "B. <<22>>",
        options: [
            "A. 22",
            "B. <<22>>",
            "C. 4",
            "D. <<4>>"
        ]
    },
    {
        numb: 21,
        question: "Quelle est la fonction JavaScript utilisée pour trouver l’indice d’un élément dans un tableau ?",
        answer: "A. indexOf()",
        options: [
            "A. indexOf()",
            "B. findIndex()",
            "C. search()",
            "D. find()"
        ]
    },
    {
        numb: 22,
        question: "Quelle est la méthode JavaScript utilisée pour créer une boucle qui s’exécute un nombre fixe de fois ?",
        answer: "A. for()",
        options: [
            "A. for()",
            "B. loop()",
            "C. repeat()",
            "D. iterate()"
        ]
    },
    {
        numb: 23,
        question: "Quelle est la fonction JavaScript utilisée pour obtenir la date actuelle ?",
        answer: "C. now()",
        options: [
            "A. getDate()",
            "B. currentDate()",
            "C. now()",
            "D. newDate()"
        ]
    },
    {
        numb: 24,
        question: "Quelle est la valeur de l’expression `null == undefined` en JavaScript ?",
        answer: "A. true",
        options: [
            "A. true",
            "B. false",
            "C. null",
            "D. undefined"
        ]
    },
    {
        numb: 25,
        question: "Quelle méthode JavaScript est utilisée pour ajouter des éléments à la fin d’un tableau et retourner la nouvelle longueur du tableau ?",
        answer: "A. push()",
        options: [
            "A. push()",
            "B. append()",
            "C. addToEnd()",
            "D. pushLength()"
        ]
    },
    {
        numb: 26,
        question: "Quelle est la fonction JavaScript utilisée pour arrondir un nombre à l’entier inférieur le plus proche ?",
        answer: "B. floor()",
        options: [
            "A. roundDown()",
            "B. floor()",
            "C. int()",
            "D. oundToFloor()"
        ]
    },
    {
        numb: 27,
        question: "Quel est le résultat de l’opération `10 * «5»` en JavaScript ?",
        answer: "A. 50",
        options: [
            "A. 50",
            "B. <<105>>",
            "C. 15",
            "D. <<10*5>>"
        ]
    },
    {
        numb: 28,
        question: "Quelle méthode JavaScript est utilisée pour vérifier si une chaîne commence par une certaine sous-chaîne ?",
        answer: "A. startWith()",
        options: [
            "A. startWith()",
            "B. beginsWith()",
            "C. startsWith()",
            "D. begin()"
        ]
    },
    {
        numb: 29,
        question: "Quelle est la fonction JavaScript utilisée pour écrire du texte dans le document HTML ?",
        answer: "D. document.write()",
        options: [
            "A. writeText()",
            "B. innerHTML()",
            "C. setText()",
            "D. document.write()"
        ]
    },
    {
        numb: 30,
        question: "Quelle est la valeur de l’expression `NaN === NaN` en JavaScript ?",
        answer: "B. false",
        options: [
            "A. true",
            "B. false",
            "C. null",
            "D. erreur"
        ]
    },
    {
        numb: 31,
        question: "Quelle méthode JavaScript est utilisée pour rejoindre les éléments d’un tableau dans une chaîne ?",
        answer: "B. join()",
        options: [
            "A. concat()",
            "B. join()",
            "C. merge()",
            "D. combine()"
        ]
    },
    {
        numb: 32,
        question: "Quelle est la fonction JavaScript utilisée pour convertir un nombre en chaîne ?",
        answer: "C. toString()",
        options: [
            "A. numberToString()",
            "B. convertToString()",
            "C. toString()",
            "D. numToStr()"
        ]
    },
    {
        numb: 33,
        question: "Quelle est la méthode JavaScript utilisée pour copier une partie d’un tableau dans un nouvel tableau ?",
        answer: "B. slice()",
        options: [
            "A. copy()",
            "B. slice()",
            "C. splice()",
            "D. duplicate()"
        ]
    },
    {
        numb: 34,
        question: "Quelle est la valeur de l’expression `true || false` en JavaScript ?",
        answer: "A. true",
        options: [
            "A. true",
            "B. false",
            "C. null",
            "D. erreur"
        ]
    },
    {
        numb: 35,
        question: "Quelle méthode JavaScript est utilisée pour remplacer une sous-chaîne dans une chaîne par une autre chaîne ?",
        answer: "A. replace()",
        options: [
            "A. replace()",
            "B. substitute()",
            "C. swap()",
            "D. change()"
        ]
    },
    {
        numb: 36,
        question: "Quelle est la fonction JavaScript utilisée pour obtenir l’heure actuelle ?",
        answer: "C. now()",
        options: [
            "A. getCurrentTime()",
            "B. timeNow()",
            "C. now()",
            "D. newTime()"
        ]
    },
    {
        numb: 37,
        question: "Quelle est la valeur de l’expression `typeof undefined` en JavaScript ?",
        answer: "A. «undefined»",
        options: [
            "A. «undefined»",
            "B. undefined",
            "C. null",
            "D. erreur"
        ]
    },
    {
        numb: 38,
        question: "Quelle méthode JavaScript est utilisée pour créer une copie superficielle d’un objet ?",
        answer: "C. shallowCopy()",
        options: [
            "A. clone()",
            "B. copy()",
            "C. shallowCopy()",
            "D. duplicate()"
        ]
    },
    {
        numb: 39,
        question: "Quelle est la fonction JavaScript utilisée pour arrêter l’exécution d’un script ?",
        answer: "B. stop()",
        options: [
            "A. halt()",
            "B. stop()",
            "C. end()",
            "D. break()"
        ]
    },
    {
        numb: 40,
        question: "Quelle est la valeur de l’expression `10 + 10 + «10»` en JavaScript ?",
        answer: "B. «2010»",
        options: [
            "A. 20",
            "B. «2010»",
            "C. 1010",
            "D. «10+10+10»"
        ]
    }




];


