
const data = {
    markSheets:[
        {
            student: 'Sriram',
            rollNo: 11,
        },
        {
            student: 'Ram',
            rollNo: 16,            
        },
        {
            student: 'sri',
            rollNo: 18,
        },
        {
            student: 'mani',
            rollNo: 20,
        },
    ]
};
const studentMarks = {
    '11':{
        tamil: 80,
        english: 90,
        science: 86,
        maths: 97,
        social: 76
    },
    '16':{
        tamil: 60,
        english: 97,
        science: 100,
        maths: 34,
        social: 100
    },
    '18':{
        tamil: 40,
        english: 70,
        science: 86,
        maths: 73,
        social: 86,
    },
    '20':{
        tamil: 40,
        english: 70,
        science: 86,
        maths: 70,
        social: 86,
    },
}
let getStudentData=
[
    ...data.markSheets
]
let Result,Total,Count=0;
const getResult=getStudentData.map(getstudentMarks)
const sortedResults=getResult.sort((a, b) => b.Total - a.Total)
const getRank=function ()
{
    let Rank=0;
  let finalArry = sortedResults.map((studentDetail) =>
  {

   studentDetail.Result === "Pass" ? studentDetail.Rank = ++Rank : studentDetail.Rank = 0
    return studentDetail;
})

return finalArry;
}
function getstudentMarks(stud)
{
    Total=0 ;
      const Name=stud.student;
      const  RollNo=stud.rollNo;
      const  marks=studentMarks[RollNo];
       
if(marks.tamil < 35 || marks.english < 35 || marks.science < 35 || marks.maths < 35 || marks.social < 35)
{
    Result ="Fail";
    
}
  else
    {
         Result ="Pass";
         
    }
        Total +=marks.tamil+marks.english+marks.science+marks.maths+marks.social;
    return (
        {
           Name,RollNo,...marks,Total,Result
    })
    }
console.table(getRank());
