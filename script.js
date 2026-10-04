const students = [
    {
        name: "Rahul Kumar",
        marks: 85,
        class: "12th",
        address: "Jamshedpur"
    },
    {
        name: "Aman Singh",
        marks: 78,
        class: "11th",
        address: "Ranchi"
    },
    {
        name: "Rohit Kumar",
        marks: 92,
        class: "12th",
        address: "Bokaro"
    },
    {
        name: "Priya Kumari",
        marks: 88,
        class: "10th",
        address: "Dhanbad"
    },
    {
        name: "Sneha Sharma",
        marks: 76,
        class: "11th",
        address: "Jamshedpur"
    }
];

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const studentContainer = document.querySelector("#studentContainer");

function displayStudents(studentList) {
    studentContainer.innerHTML = "";

    if (studentList.length === 0) {
        studentContainer.innerHTML = `
            <p class="no-result">No student found</p>
        `;
        return;
    }

    studentList.forEach(student => {
        const div = document.createElement("div");

        div.classList.add("student");

        div.innerHTML = `
            <h2>${student.name}</h2>
            <p>Age: ${student.age}</p>
            <p>Course: ${student.course}</p>
        `;

        studentContainer.appendChild(div);
    });
}

searchBtn.addEventListener("click", () => {
    const searchText = searchInput.value.trim().toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchText)
    );

    displayStudents(filteredStudents);
});

displayStudents(students);