function project(input) {
    let name = input[0];
    let numberProjects = Number(input[1]);
    let totalTime = numberProjects * 3
    console.log(`The architect ${name} will need ${totalTime} hours to complete ${numberProjects} project/s.`)

}


project(["George ",
"4 "])