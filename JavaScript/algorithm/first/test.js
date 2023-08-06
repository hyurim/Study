function solution(s){
    let answer;
    let a = 0;
    let b = [];
    if (s[0] == ")" || s.substr(s.length -1, 1) == "(") {
        answer = false;
    }
    else {
        for (const c of s){
            if (c === "(") {
                a += 1;
            }
            else a -= 1;
            
            if(a === -1 ){
                answer = false;
                break;
            } else if ( a !== 0){
                answer = false;
            }
            else answer = true;
        }
    }
    return answer;
}