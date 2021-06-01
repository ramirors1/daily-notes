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
var currentDate = new Date();
var datetime = "Last Sync: " + currentDate.getDay() + "/" + currentDate.getMonth() 
+ "/" + currentDate.getFullYear() + " @ " 
+ currentDate.getHours() + ":" 
+ currentDate.getMinutes() + ":" + currentDate.getSeconds();

const newNote = "createNote"
console.log(newNote, currentDate)
