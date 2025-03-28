
let exercises = JSON.parse(localStorage.getItem('exercises')) || [];
let goals = JSON.parse(localStorage.getItem('goals')) || [];


async function fetchData() {
    try {
        const response = await fetch('https://project-backend-fzjb.onrender.com/api/exercises'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        exercises = data.exercises; 
        goals = data.goals; 
        updateExerciseList();
        updateGoalsList(); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();


function updateExerciseList() {
    const exerciseListElement = document.getElementById('exercise-list');
    exerciseListElement.innerHTML = ''; 

    exercises.forEach((exercise) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${exercise.type} - Sets: ${exercise.sets}, Reps: ${exercise.repetitions}, Weight: ${exercise.weight}kg`;
        exerciseListElement.appendChild(listItem);
    });
}


function updateGoalsList() {
    const goalsListElement = document.getElementById('goals-list');
    goalsListElement.innerHTML = ''; 

    goals.forEach((goal) => {
        const listItem = document.createElement('li');
        listItem.textContent = goal;
        goalsListElement.appendChild(listItem);
    });
}


document.querySelector('.track-form form').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const exerciseType = document.getElementById('exercise-type').value.trim();
    const sets = document.getElementById('sets').value;
    const repetitions = document.getElementById('repetitions').value;
    const weight = document.getElementById('weight').value;

    if (exerciseType && sets && repetitions && weight) {
        const newExercise = { type: exerciseType, sets: sets, repetitions: repetitions, weight: weight };
        exercises.push(newExercise);
        localStorage.setItem('exercise', JSON.stringify(exercise)); 
        updateExerciseList(); 
        document.querySelector('.track-form form').reset(); 
        alert('Exercise logged successfully!'); 
    } else {
        alert('Please fill in all fields.'); 
    }
});

document.querySelector('.track-form form').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const fitnessGoal = document.getElementById('fitness-goal').value.trim();

    if (fitnessGoal) {
        goals.push(fitnessGoal);
        localStorage.setItem('goals', JSON.stringify(goals)); 
        updateGoalsList(); 
        document.querySelector('.track-form form') .reset(); 
        alert('Goal saved successfully!'); 
    } else {
        alert('Please enter a fitness goal.'); 
    }
});


document.querySelector('.Login-form form').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert(`Successful login! Welcome back, ${email}!`); 
        document.querySelector('.Login-form form').reset(); 
    } else {
        alert('Please enter both email and password.'); 
    }
});


document.querySelector('.signup-form form').addEventListener('submit', (event) => {
    event.preventDefault(); 

    
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (email && password) {
        alert(`Signup successful! Welcome, ${email}!`);
        
        document.querySelector('.signup-form form').reset(); 
    } else {
        alert('Please fill in all fields.'); 
    }
});