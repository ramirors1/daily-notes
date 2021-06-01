const notes = [
{
    id: 1,
    subject: "JavaScript",
    date: "27 May 2021",
    feeling: "sick",
    duration: 4
},
{
    id:2,
    subject: "Terminal",
    date: "27 May 2021",
    feeling: "more comfortable",
    duration: 1
}
]
const noteAboutToday = {
    id: 3,
    subject: "More JavaScript",
    date: "27 May 2021",
    feeling: "overwhelmed",
    duration: 8
}

notes.push(noteAboutToday)

const createNote = (note) => {
    const lastNote = note.length -1
    if (lastNote === 1){
        return newNote
    }
    const lastNoteId = note [lastNote].id
    const newNote = lastItemId 
    return newNote
}
var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

const newNote = "createNote"
console.log(newNote, currentdate)
