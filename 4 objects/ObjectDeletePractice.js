var mydates = {
    molly: true,
    leah: false,
    susan: true,
    karyn: true,
    bianca: false,
    spots: false
}

//delete spots from mydates
mydates.spots = null;
delete mydates.spots;
mydates

//loop over my dates and delete all properties with a falsy value