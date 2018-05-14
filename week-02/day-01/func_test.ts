let fighter: string[] = ['X-wing', 'TIE-Fighter', 'Y-wing'];
console.log(fighter);

fighter.push('TIE-Interceptor');
fighter.unshift('LAAT');
console.log(fighter);

let takeoff = fighter.map(start => `${start} is ready for take-off.`);
console.log(takeoff);

