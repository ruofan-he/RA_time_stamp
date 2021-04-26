function showUserWeekDay() {
    var WeekChars = [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ];
    var WeekInput = [   "",
                        "",
                        "別室での作業のため、打刻できず。8時始業、 14時30分終業",
                        "別室での作業のため、打刻できず。9時始業、 12時終業",
                        "別室での作業のため、打刻できず。13時始業、 18時終業",
                        "",
                        ""
                    ]
  
    var inputYear = 2021;//document.getElementById("userYear").value;
    var inputMonth = document.getElementById("sdate_date_mm").value;
    var inputDate = document.getElementById("sdate_date_dd").value;
  
    // 入力された数値から日付オブジェクトを作る
    var userDate = new Date( inputYear, inputMonth-1, inputDate );
  
    // 日付と曜日を表示する
    console.log("指定された「" + 
       userDate.getFullYear() + "年" + 
       (userDate.getMonth()+1) + "月" + 
       userDate.getDate() + "日」は、" + 
       WeekChars[userDate.getDay()] + "です。");
    
    text=document.getElementsByName('gi1_1')[0]
    text.value = WeekInput[userDate.getDay()]
}

showUserWeekDay()
