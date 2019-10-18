// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
    }
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location} `
    }
  }
  
  class Instructor extends Person{
    constructor(InstructorAttributes){
      super(InstructorAttributes);
      this.specialty = InstructorAttributes.specialty;
      this.favLanguage = InstructorAttributes.favLanguage;
      this.catchPhrase = InstructorAttributes.catchPhrase;
    }
    dem(subject){
      return `Today we are learning about ${subject}`
    }
    grade(student,subject){
      return `${student.name} receive perfect score on ${subject}`
    }
  }
  
  class Students extends Person{
    constructor(StudentAttributes){
    super(StudentAttributes);
    this.previousBackground = StudentAttributes.previousBackground;
    this.className = StudentAttributes.className;
    this.favSubjects = StudentAttributes.favSubject;
    }
    listsSubjects(){
        return this.favSubjects.forEach(subject => console.log(subject))
    }
    PRAssignment(student,subject){
        return `${student.name} has submitted a PR for${subject}`
    }
  }

  class ProjectManagers extends Instructor{
      constructor(PMAttributes){
          super(PMAttributes);
          this.gradClassName = PMAttributes.gradClassName;
          this.favInstructor = PMAttributes.favInstructor;
      }
      standUp(student, channel){
        return `${student.name} announces to ${channel}, @channel standy times!`
      }

      debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject} `
      }
  }


  const instructor = new Instructor({
      name: 'Fred',
      location: 'Texas',
      age: 32,
      specialty: 'redux',
      favLanguage: 'JavaScript, Python, Elm etc',
      catchPhrase: 'Dont forget the homies'
  });


const instructorTwo = new Instructor({
    name: 'James',
    location:'NYC',
    age: 36,
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: 'Opps! Looks like I forgot a semicolon!'
});


  const studentsOne = new Students({
      name: 'Maya',
      location:'Cali',
      age: 28,
      specialty: 'Full Stack',
      catchPhrase: "Aughhhh!!!",
      previousBackground: 'Student',
      className: 'Web25',
      favSubject: ['HTML', 'CSS', 'JavaScript'],
  })

  const studentsTwo = new Students({
    name: 'Farah',
    location:'Seattle',
    age: 26,
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: "Why isn't this working!!!",
    previousBackground: 'Student',
    className: 'Web25',
    favSubject: ['HTML', 'CSS', 'JavaScript'],
  })


  const projectManagers = new ProjectManagers({
      name: 'Jessica',
      location:'Bay Area',
      age: 30,
      gradClassName: 'CS1',
      favInstructor: 'Brit Hemming',
  })

  const projectManagersTwo = new ProjectManagers({
    name: 'Milo',
    location:'Chicago',
    age: 32,
    gradClassName: 'CS1',
    favInstructor: 'Sean',
})


  console.log(instructor.dem('JavaScript'));
  console.log(instructor.grade(studentsTwo,'CSS'));

  console.log(studentsOne.listsSubjects());
  console.log(studentsTwo.PRAssignment(studentsOne, ' JavaScript')); 

  console.log (projectManagers.standUp(projectManagers, 'web25_help'));
  console.log (projectManagers.debugsCode(projectManagersTwo, 'HTML'));
