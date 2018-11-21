class Course extends Menu{
	constructor(name, time, date, rooms)
	{
		super();
		this.name=name;
		this.time=time;
		this.date=date;
		this.rooms=rooms;
	}
}

class Student extends Menu{
	constructor (id, name, gpa, courses)
	{
		super();
		this.id=id;
		this.name=name;
		this.gpa=gpa;
		this.courses=courses;
	}
}