function basicTeenager(age) {
  if((age>=13)&&(age<=19)){
    return "you are a teenager";
  }

}

function teenager(age) {
  if((age>=13)&&(age<=19)){
    return "you are a teeager"
  }else{
    return "you are not a teenager"
  }

}

function ageChecker(age){
    if ((age>=13) && (age<=19)){
        return "you are a teenager";
    }
    else if(age<=12){
        return "you are a kid";
    }
    else{
        return "you are a grownup";
    }
}

}

function ternaryTeenager(age){
    return ((age>=13)&&(age<=19))? "you are a teenager":
    "you are not a teenager";
}

}

function switchAge(age){
    switch((age>=13) &&(age<=19)){
            case(13):
            return "teenager";
            break;
            case(14):
            return "teenager";
            break;case(15):
            return "teenager";
            break; case(17):
            return "teenager";
            break; case(18):
            return "teenager";
            break; case(19):
            return "teenager";
            break;
        default:
    return "not among age group";
}
}

}
