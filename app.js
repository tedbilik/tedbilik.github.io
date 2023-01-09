const questions = [
  {
    reset: true,
    need: 0,
  },
  {
    prompt: "C++ dilini bundan əvvəl istifadə etmisinimizmi?",
    choices: ["Bəli", "Xeyr"],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 1, // how many questions need to pass to next round
    fail: 1, // class I1
  },
  {
    prompt:
      "Respublika Olimpiadasında (fənn müsabiqəsi buna aid deyil) olan iştirakınıza ən uyğun seçim hansıdır?",
    choices: [
      "Hələ iştirak etməmişəm",
      "Birinci turda iştirak etmişəm",
      "İkinci turda iştirak etmişəm",
      "Final mərhələdə iştirak etmişəm",
      "Medalım var",
    ],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 0,
  },
  {
    prompt:
      "Respublika Olimpiadasından kənar kodlaşdırma olimpiadalarında (yerli və ya beynəlxalq) olan iştirakınıza ən uyğun seçim hansıdır?",
    choices: [
      "Hələ iştirak etməmişəm",
      "İştirak etmişəm, amma C++ dilindən istifadə etməmişəm",
      "Azercell CUP medalçısıyam",
      "Başqa beynəlxalq olimpiada medalçısıyam",
    ],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 0,
  },
  {
    prompt:
      "2000000000 (9 sayda sıfır) ədədini ifadə etmək üçün int tipindən istifadə edə bilərikmi?",
    choices: ["Bəli, int yetərlidir", "Xeyr, long long tipi lazımdır"],
    correct: "choice-0",
  },
  {
    prompt:
      "3000000000 (9 sayda sıfır) ədədini ifadə etmək üçün int tipindən istifadə edə bilərikmi?",
    choices: ["Bəli, int yetərlidir", "Xeyr, long long tipi lazımdır"],
    correct: "choice-1",
  },
  {
    prompt:
      "300000000 (8 sayda sıfır) ədədini ifadə etmək üçün int tipindən istifadə edə bilərikmi?",
    choices: ["Bəli, int yetərlidir", "Xeyr, long long tipi lazımdır"],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 2, // how many questions need to pass to next round
    fail: 1, // class I1
  },
  {
    prompt:
      "x = 5 və y = 3 olduqda, növbəti sətiri icra etdikdən sonra z dəyişəninin dəyəri nə olacaq?\nbool z = (x*y > 13 && x+y < 8);",
    choices: [
      "0",
      "1",
      "true",
      "false",
      "Kompilyasiya xətası (sintaksis səhvi)",
    ],
    correct: "choice-3",
  },
  {
    prompt:
      "Seçimlərdən hansı x və y dəyişənlərinin kvadratlarının cəminin 25-dən kiçik olmağı şərtini yoxlayır?",
    choices: [
      "(x+y) * (x+y) < 25",
      "x*x + y*y<25",
      "(x+y) * (x+y)<=25",
      "x*x + y*y<=25",
      "x^2 + y^2 < 25",
    ],
    correct: "choice-1",
  },
  {
    reset: true,
    need: 1,
    fail: 1,
  },
  {
    prompt:
      "Seçimlərdən hansı tip sözləri ifadə etmək üçün istifadə oluna bilər?",
    choices: ["String", "string", "text", "txt", "myString"],
    correct: "choice-1",
  },
  {
    reset: true,
    need: 1,
    fail: 1,
  },
  {
    prompt:
      "Əgər s string tipidirsə, seçimlərdən hansı onun uzunluğunu göstərir?",
    choices: ["len(s)", "s.size()", "length(s)", "size(s)"],
    correct: "choice-1",
  },
  {
    prompt:
      "s və t string tipləridirlərsə, hansı seçim onların ard-arda birləşməyini ifadə edir?",
    choices: ["s.add(t)", "s.concat(t)", "s.substr(t)", "s+t", "st", "s[t]"],
    correct: "choice-3",
  },
  {
    reset: true,
    need: 1,
    fail: 1,
  },
  {
    prompt: "arr massivinin ilk elementi seçimlərdən hansıdır?",
    choices: ["arr[0]", "arr[1]", "arr(0)", "arr(1)"],
    correct: "choice-0",
  },
  {
    prompt:
      "arr dəyişəni int tipi massividirsə, onun 5-ci elementinə necə 10 ədədini yadda saxlaya bilərik?",
    choices: ["arr[5] = 10", "arr[10] = 5", "arr[5].save(10)", "arr[4] = 10"],
    correct: "choice-3",
  },
  {
    reset: true,
    need: 1,
    fail: 1,
  },
  {
    prompt:
      "Seçimlərdən hansı 1-dən 9-a qədər cüt ədədlərin üzərində dövr edir?",
    choices: [
      "for(int i = 0; i < 10; i++)",
      "for(int i = 0; i < 10; i+=2)",
      "for(int i = 1; i <= 10; i+=2)",
      "for(int i = 2; i < 10; i+=2)",
    ],
    correct: "choice-3",
  },
  {
    prompt:
      "Seçimlərdən hansı 1-dən 100-ə qədər ikinin qüvvətləri üzərində dövr edir?",
    choices: [
      "for(int i = 0; i < 100; i*=2)",
      "for(int i = 0; i < 100; i+=2)",
      "for(int i = 1; i <= 100; i*=2)",
      "for(int i = 0; i < 100; i+=1,2,4,8,16,32,64)",
    ],
    correct: "choice-2",
  },
  {
    reset: true,
    need: 1,
    fail: 1,
  },
  {
    prompt:
      "Əgər bir funksiya heç bir dəyər qaytarmırsa, onun tipi nə olmalıdır?",
    choices: ["int", "main", "zero", "none", "void", "class"],
    correct: "choice-4",
  },
  {
    reset: true,
    need: 1,
    fail: 1,
  },
  {
    prompt:
      "vector<int> v; kimi yaradılmış vectora 10 ədədini necə əlavə etmək olar?",
    choices: [
      "v[-1] = 10;",
      "v.back() = 10;",
      "v.append(10);",
      "v.push_back(10);",
      "v.insert(10);",
    ],
    correct: "choice-3",
  },
  {
    reset: true,
    need: 1,
    fail: 1.5,
  },
  {
    prompt: "stack, queue və deque tiplərinin hamısı ilə tanışsınızmı?",
    choices: [
      "Onları və üzərindəki əməlləri rahatlıqla istifadə edə bilirəm",
      "Ümumi tanışlığım var, amma çox istifadələrini bilmirəm",
      "Onları hələ öyrənməmişəm",
    ],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 1,
    fail: 1.5,
  },
  {
    prompt:
      "set<int> s; kimi yaradılmış setə 10 ədədini necə əlavə etmək olar?",
    choices: [
      "s[-1] = 10;",
      "s.back() = 10;",
      "s.append(10);",
      "s.push_back(10);",
      "s.insert(10);",
    ],
    correct: "choice-4",
  },
  {
    reset: true,
    need: 1,
    fail: 2,
  },
  {
    prompt:
      "s setinə sonuncu əlavə edilmiş elementi hansı əməl ilə tapmaq olar?",
    choices: [
      "s[s.size()-1]",
      "s.back()",
      "s[-1]",
      "s.end()",
      "*--s.end()",
      "bunu birbaşa etmək mümkün deyil",
    ],
    correct: "choice-5",
  },
  {
    reset: true,
    need: 1,
    fail: 2,
  },
  {
    prompt: "map tipi ilə tanışsınızmı?",
    choices: [
      "Rahatlıqla istifadə edə bilirəm",
      "Ümumi tanışlığım var, amma çox istifadəsini bilmirəm",
      "Hələ öyrənməmişəm",
    ],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 1,
    fail: 2,
  },
  {
    prompt:
      "set üzərində lower_bound və upper_bound əməlləri ilə tanışsınızmı?",
    choices: [
      "Onları rahatlıqla istifadə edə bilirəm",
      "Ümumi tanışlığım var, amma çox istifadələrini bilmirəm",
      "Onları hələ öyrənməmişəm",
    ],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 1,
    fail: 2,
  },
  {
    prompt: "Binary Search (ikili axtarış) alqoritmi ilə tanışsımızmı?",
    choices: [
      "Çox yaxşı bilirəm",
      "Ümumi tanışlığım var, amma çox istifadələrini bilmirəm",
      "Hələ öyrənməmişəm",
    ],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 1,
    fail: 2,
  },
  {
    prompt: "Qraflar ilə tanışsımızmı?",
    choices: [
      "Çox yaxşı bilirəm",
      "Ümumi tanışlığım var, amma çox istifadələrini bilmirəm",
      "Hələ öyrənməmişəm",
    ],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 1,
    fail: 2,
  },
  {
    prompt: "Qraflarda DFS, BFS, və Dijkstra alqoritmləri ilə tanışsımızmı?",
    choices: [
      "Hamısını yaxşı bilirəm",
      "Ümumi tanışlığım var, amma çox istifadələrini bilmirəm",
      "Hələ öyrənməmişəm",
    ],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 1,
    fail: 2,
  },
  {
    prompt:
      "Xətti dinamik proqramlaşdırma alqoritmləri ilə tanışsımızmı? Məsələn, platforma məsələsi.",
    choices: [
      "Çox yaxşı bilirəm",
      "Ümumi tanışlığım var, amma çox istifadələrini bilmirəm",
      "Hələ öyrənməmişəm",
    ],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 1,
    fail: 2,
  },
  {
    prompt:
      "Çox-ölçülü dinamik proqramlaşdırma alqoritmləri ilə tanışsımızmı? Məsələn, knapsack (bel çantası) məsələsi.",
    choices: [
      "Çox yaxşı bilirəm",
      "Ümumi tanışlığım var, amma çox istifadələrini bilmirəm",
      "Hələ öyrənməmişəm",
    ],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 1,
    fail: 2,
  },
  {
    prompt: "Codeforces saytında yarışlarda iştirak edirsinizmi?",
    choices: [
      "Çox vaxt iştirak edirəm",
      "Hesabım var, amma  yarışlarda çox iştirak etməmişəm",
      "Hələ Codeforces ilə məşğul olmuram",
    ],
    correct: "choice-0",
  },
  {
    reset: true,
    need: 1,
    fail: 2.5,
  },
  {
    reset: true,
    need: 1,
    fail: 3,
  },
];

// document.querySelector("#start").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = document.querySelector("#name");
//   const grade = document.querySelector("#grade");
// });
