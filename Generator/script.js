const vtipyArray = [
    "šli dva a prostřední upadl",
    "skákal pes přes okno vylez",
    "hahah",
    "velmi vtipný",
  ];

  const prisloviArray = [
    "Kdo se směje naposled, ten se směje nejlépe.",
    "Čistota půl zdraví.",
    "Kdo seje vítr, sklízí bouři.",
  ];

const ulozeneVtipy = JSON.parse(localStorage.getItem("vtipy"));

if (ulozeneVtipy != null) {
    for(i = 0; i < ulozeneVtipy.length; i++){
        vtipyArray.push(ulozeneVtipy[i])
    }
}