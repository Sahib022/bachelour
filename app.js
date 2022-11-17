//* FIRST GROUP NAME

const subFullName = {
    firGroupName: `
1) Az dili
2) İngilis dili
3) Fizika
4) Kimya
5) Riyaziyyat`,
    secGroupName: `
1) Az dili
2) İngilis dili
3) Tarix
4) Coğrafiya
5) Riyaziyyat`,
    thiGroupName: `
1) Ədəbiyyat
2) Riyaziyyat
3) İngilis dili
4) Az dili
5) Tarix`,
    fourGroupName: `
1) Fizika
2) Az dili
3) Riyaziyyat
4) Kimya
5) Biologiya`};


const subFourGroupName = {
    firFourGroupName: `
1) Az dili
2) İngilis dili
3) Fizika`,
    secFourGroupName: `
1) Az dili
2) İngilis dili
3) Tarix`,
    thiFourGroupName: `
3) İngilis dili
4) Az dili
5) Tarix`,
    fourFourGroupName: `
1) Fizika
2) Kimya
3) Riyaziyyat`};


const subEightPtName = {
    firEightGroupName: `
1) Kimya
2) Riyaziyyat`,
    secEightGroupName: `
1) Coğrafiya
2) Riyaziyyat`,
    thiEightGroupName: `
1) Az dili
2) Tarix`,
    fourEightGroupName: `
1) Kimya
2) Biologiya`};

let quesLimit = 25;


//* SHOW GROUP FUNCTION

//todo Group Buttons

function outGroup() {
    alert(`Sistemdən çıxış edilir..`);
    window.close();
}

function resetGroup() {
    document.getElementById('entryGroup').value = '';
}

function goBack() {
    window.open('/index.html');
}

function clickGroup() {

    let entryGroup = document.getElementById('entryGroup').value * 1;

    if (entryGroup === 1) {
        window.open('subjectInfo/sub1Info.html');
    }
    else if (entryGroup === 2) {
        window.open('subjectInfo/sub2Info.html');
    }
    else if (entryGroup === 3) {
        window.open('subjectInfo/sub3Info.html');
    }
    else if (entryGroup === 4) {
        window.open('subjectInfo/sub4Info.html');
    }
    else if (entryGroup === 5) {
        alert(`**************************** QISA MƏLUMAT ****************************

    1) İmtahan balının hesablanma qaydası: Doğru girilən bal sayısı - (Yanlış girilən bal sayısı / 4);
                
    Ən axırda isə bütün ballar toplanaraq ümumi nəticəyə gəlinir;
    *************************************************************************
    2) Balların dərəcələri:
700 : 'AA'
601 - 699 : 'A'
401 - 600 : 'B'
251 - 400 : 'C'
150 - 250 : 'D'
0 - 149 : Kəsildiniz
    (-) : -;
    ************************************************************************* `);
    }
    else if (isNaN(entryGroup)) {
        alert(`Xəta! Girilən dəyər ədəd tipində olmalıdır`);
    }
    else if (0 > entryGroup) {
        alert(`Xəta! Girilən dəyər mənfi ədəd ola bilməz`);
    }
    else if (!entryGroup) {
        alert(`Xəta! Boş dəyər girmək olmaz`);
    }
    else if (!(entryGroup === 1) || entryGroup === 2 || entryGroup === 3 || entryGroup === 4 || entryGroup === 5) {
        alert(`Xəta! Girilən dəyər sistemdə mövcud deyildir`);
    }
}


//* SHOW SUBJECT PROPERTY FUNCTION


function clickInfo1() {

    let entryInfo1 = document.getElementById('entryInfo1').value * 1;

    if (entryInfo1 === 1) {
        window.open('subjectPoint/sub1Pt.html');
    }
    else if (entryInfo1 === 2) {
        alert(`Maksimum sual limiti: 25`);
    }
    else if (entryInfo1 === 3) {
        alert(`1 ci qrup üzrə bütün fənnlərin siyahısı:
${subFullName.firGroupName}`);
    }
    else if (entryInfo1 === 4) {
        alert(`1 ci qrup üzrə "4" ballıq fənnlərin siyahısı:
${subFourGroupName.firFourGroupName}`);
    }
    else if (entryInfo1 === 5) {
        alert(`1 ci qrup üzrə "8" ballıq fənnlərin siyahısı:
${subEightPtName.firEightGroupName}`);
    }
    else if (isNaN(entryInfo1)) {
        alert(`Xəta! Girilən dəyər ədəd tipində olmalıdır`);
    }
    else if (0 > entryInfo1) {
        alert(`Xəta! Girilən dəyər mənfi ədəd ola bilməz`);
    }
    else if (!entryInfo1) {
        alert(`Xəta! Boş dəyər girmək olmaz`);
    }
    else if (!(entryInfo1 === 1) || entryInfo1 === 2 || entryInfo1 === 3 || entryInfo1 === 4 || entryInfo1 === 5) {
        alert(`Xəta! Girilən dəyər sistemdə mövcud deyildir`);
    }
}

function clickInfo2() {

    let entryInfo2 = document.getElementById('entryInfo2').value * 1;

    if (entryInfo2 === 1) {
        window.open('subjectPoint/sub2Pt.html');
    }
    else if (entryInfo2 === 2) {
        alert(`Maksimum sual limiti: 25`);
    }
    else if (entryInfo2 === 3) {
        alert(`2 ci qrup üzrə bütün fənnlərin siyahısı:
${subFullName.secGroupName}`);
    }
    else if (entryInfo2 === 4) {
        alert(`2 ci qrup üzrə "4" ballıq fənnlərin siyahısı:
${subFourGroupName.secFourGroupName}`);
    }
    else if (entryInfo2 === 5) {
        alert(`2 ci qrup üzrə "8" ballıq fənnlərin siyahısı:
${subEightPtName.secEightGroupName}`);
    }
    else if (isNaN(entryInfo2)) {
        alert(`Xəta! Girilən dəyər ədəd tipində olmalıdır`);
    }
    else if (0 > entryInfo2) {
        alert(`Xəta! Girilən dəyər mənfi ədəd ola bilməz`);
    }
    else if (!entryInfo2) {
        alert(`Xəta! Boş dəyər girmək olmaz`);
    }
    else if (!(entryInfo2 === 1) || entryInfo2 === 2 || entryInfo2 === 3 || entryInfo2 === 4 || entryInfo2 === 5) {
        alert(`Xəta! Girilən dəyər sistemdə mövcud deyildir`);
    }
}

function clickInfo3() {

    let entryInfo3 = document.getElementById('entryInfo3').value * 1;

    if (entryInfo3 === 1) {
        window.open('subjectPoint/sub3Pt.html');
    }
    else if (entryInfo3 === 2) {
        alert(`Maksimum sual limiti: 25`);
    }
    else if (entryInfo3 === 3) {
        alert(`3 cü qrup üzrə bütün fənnlərin siyahısı:
${subFullName.thiGroupName}`);
    }
    else if (entryInfo3 === 4) {
        alert(`3 cü qrup üzrə "4" ballıq fənnlərin siyahısı:
${subFourGroupName.thiFourGroupName}`);
    }
    else if (entryInfo3 === 5) {
        alert(`3 cü qrup üzrə "8" ballıq fənnlərin siyahısı:
${subEightPtName.thiEightGroupName}`);
    }
    else if (isNaN(entryInfo3)) {
        alert(`Xəta! Girilən dəyər ədəd tipində olmalıdır`);
    }
    else if (0 > entryInfo3) {
        alert(`Xəta! Girilən dəyər mənfi ədəd ola bilməz`);
    }
    else if (!entryInfo3) {
        alert(`Xəta! Boş dəyər girmək olmaz`);
    }
    else if (!(entryInfo3 === 1) || entryInfo3 === 2 || entryInfo3 === 3 || entryInfo3 === 4 || entryInfo3 === 5) {
        alert(`Xəta! Girilən dəyər sistemdə mövcud deyildir`);
    }
}

function clickInfo4() {

    let entryInfo4 = document.getElementById('entryInfo4').value * 1;

    if (entryInfo4 === 1) {
        window.open('subjectPoint/sub4Pt.html');
    }
    else if (entryInfo4 === 2) {
        alert(`Maksimum sual limiti: 25`);
    }
    else if (entryInfo4 === 3) {
        alert(`4 cü qrup üzrə bütün fənnlərin siyahısı:
${subFullName.fourGroupName}`);
    }
    else if (entryInfo4 === 4) {
        alert(`4 cü qrup üzrə "4" ballıq fənnlərin siyahısı:
${subFourGroupName.fourFourGroupName}`);
    }
    else if (entryInfo4 === 5) {
        alert(`4 cü qrup üzrə "8" ballıq fənnlərin siyahısı:
${subEightPtName.fourEightGroupName}`);
    }
    else if (isNaN(entryInfo4)) {
        alert(`Xəta! Girilən dəyər ədəd tipində olmalıdır`);
    }
    else if (0 > entryInfo4) {
        alert(`Xəta! Girilən dəyər mənfi ədəd ola bilməz`);
    }
    else if (!entryInfo4) {
        alert(`Xəta! Boş dəyər girmək olmaz`);
    }
    else if (!(entryInfo4 === 1) || entryInfo4 === 2 || entryInfo4 === 3 || entryInfo4 === 4 || entryInfo4 === 5) {
        alert(`Xəta! Girilən dəyər sistemdə mövcud deyildir`);
    }
}


//* CANCULATE SUBJECTS RESET

function resetInfo1() {
    document.getElementById('entryInfo1').value = '';
}
function resetInfo2() {
    document.getElementById('entryInfo2').value = '';
}
function resetInfo3() {
    document.getElementById('entryInfo3').value = '';
}
function resetInfo4() {
    document.getElementById('entryInfo4').value = '';
}

//* CANCULATE SUBJECTS

function cancul1() {
    let firAzTrue = document.getElementById('firAzTrue').value * 1;
    let firEnTrue = document.getElementById('firEnTrue').value * 1;
    let firPhyTrue = document.getElementById('firPhyTrue').value * 1;
    let firChemTrue = document.getElementById('firChemTrue').value * 1;
    let firMathTrue = document.getElementById('firMathTrue').value * 1;

    let firAzFalse = document.getElementById('firAzFalse').value * 1;
    let firEnFalse = document.getElementById('firEnFalse').value * 1;
    let firPhyFalse = document.getElementById('firPhyFalse').value * 1;
    let firChemFalse = document.getElementById('firChemFalse').value * 1;
    let firMathFalse = document.getElementById('firMathFalse').value * 1;

    let fir4True = firAzTrue + firEnTrue + firPhyTrue;
    let fir4False = firAzFalse + firEnFalse + firPhyFalse;
    let fir8True = firChemTrue + firMathTrue;
    let fir8False = firChemFalse + firMathFalse;

    //!  Canculate Four Points

    let canculFour = fir4True - (fir4False / 4);
    let resultFour = canculFour * 4;

    //!  Canculate Eight Points

    let canculEight = fir8True - (fir8False / 4);
    let resultEight = canculEight * 8;

    //! Result

    let resultAllGroup = resultFour + resultEight;



    if (resultAllGroup >= 0 && resultAllGroup <= 149) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}
        
Siz imtahandan kəsilmisiniz.`);
    }
    else if (resultAllGroup >= 150 && resultAllGroup <= 250) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan zəif nəticə toplamısınız

Nəticəniz: 'D'`);
    }
    else if (resultAllGroup >= 251 && resultAllGroup <= 400) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan orta nəticə toplamısınız.

Nəticəniz: 'C'`);
    }
    else if (resultAllGroup >= 401 && resultAllGroup <= 600) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan yüksək nəticə toplamısınız.

Nəticəniz: 'B'`);
    }
    else if (resultAllGroup >= 601 && resultAllGroup <= 699) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan əla nəticə toplamısınız.

Nəticəniz: 'A'`);
    }
    else if (resultAllGroup === 700) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}
      
Təbriklər! Siz imtahandan ən yüksək balı toplamısınız.

Nəticəniz: 'AA'`);
    
    }
    else if (0 > resultAllGroup) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

İmtahandan kəsilmisiniz. Toplamış olduğunuz bal 0 dan kiçikdir.`);
    }


    let firAzLimit = quesLimit - firAzTrue;
    if (firAzFalse > firAzLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let firEnLimit = quesLimit - firEnTrue;
    if (firEnFalse > firEnLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let firPhyLimit = quesLimit - firPhyTrue;
    if (firPhyFalse > firPhyLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let firChemLimit = quesLimit - firChemTrue;
    if (firChemFalse > firChemLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let firMathLimit = quesLimit - firMathTrue;
    if (firMathFalse > firMathLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;

    }


    if (isNaN(firAzTrue) || isNaN(firEnTrue) || isNaN(firPhyTrue) || isNaN(firChemTrue) || isNaN(firMathTrue) || isNaN(firAzFalse) || isNaN(firEnFalse) || isNaN(firPhyFalse) || isNaN(firChemFalse) || isNaN(firMathFalse)) {
        document.getElementById('result').innerHTML = 'Xəta! Girdiyiniz dəyər ədəd tipində olmalıdır';

    }
    else if (firAzTrue > quesLimit || firEnTrue > quesLimit || firPhyTrue > quesLimit || firChemTrue > quesLimit || firMathTrue > quesLimit || firAzFalse > quesLimit || firEnFalse > quesLimit || firPhyFalse > quesLimit || firChemFalse > quesLimit || firMathFalse > quesLimit) {
        document.getElementById('result').innerHTML = 'Xəta! Sual limiti 25 dən yüksək olmamalıdır';

    }
    else if (0 > firAzTrue || 0 > firEnTrue || 0 > firPhyTrue || 0 > firChemTrue || 0 > firMathTrue || 0 > firAzFalse || 0 > firEnFalse || 0 > firPhyFalse || 0 > firChemFalse || 0 > firMathFalse) {
        document.getElementById('result').innerHTML = 'Xəta! Girilən dəyər mənfi ədəd ola bilməz';

    }
    else if (firAzTrue == " " || firEnTrue == " " || firPhyTrue == " " || firChemTrue == " " || firMathTrue == " ") {
        document.getElementById('result').innerHTML = 'Xəta! Boş dəyər girmək olmaz';

    }
}

function cancul2() {
    let secAzTrue = document.getElementById('secAzTrue').value * 1;
    let secEnTrue = document.getElementById('secEnTrue').value * 1;
    let secHisTrue = document.getElementById('secHisTrue').value * 1;
    let secGeoTrue = document.getElementById('secGeoTrue').value * 1;
    let secMathTrue = document.getElementById('secMathTrue').value * 1;

    let secAzFalse = document.getElementById('secAzFalse').value * 1;
    let secEnFalse = document.getElementById('secEnFalse').value * 1;
    let secHisFalse = document.getElementById('secHisFalse').value * 1;
    let secGeoFalse = document.getElementById('secGeoFalse').value * 1;
    let secMathFalse = document.getElementById('secMathFalse').value * 1;

    let fir4True = secAzTrue + secEnTrue + secHisTrue;
    let fir4False = secAzFalse + secEnFalse + secHisFalse;
    let fir8True = secGeoTrue + secMathTrue;
    let fir8False = secGeoFalse + secMathFalse;

    //!  Canculate Four Points

    let canculFour = fir4True - (fir4False / 4);
    let resultFour = canculFour * 4;

    //!  Canculate Eight Points

    let canculEight = fir8True - (fir8False / 4);
    let resultEight = canculEight * 8;

    //! Result

    let resultAllGroup = resultFour + resultEight;



    if (resultAllGroup >= 0 && resultAllGroup <= 149) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}
        
Siz imtahandan kəsilmisiniz.`);
    }
    else if (resultAllGroup >= 150 && resultAllGroup <= 250) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan zəif nəticə toplamısınız

Nəticəniz: 'D'`);
    }
    else if (resultAllGroup >= 251 && resultAllGroup <= 400) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan orta nəticə toplamısınız.

Nəticəniz: 'C'`);
    }
    else if (resultAllGroup >= 401 && resultAllGroup <= 600) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan yüksək nəticə toplamısınız.

Nəticəniz: 'B'`);
    }
    else if (resultAllGroup >= 601 && resultAllGroup <= 699) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan əla nəticə toplamısınız.

Nəticəniz: 'A'`);
    }
    else if (resultAllGroup === 700) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}
      
Təbriklər! Siz imtahandan ən yüksək balı toplamısınız.

Nəticəniz: 'AA'`);
    }
    else if (0 > resultAllGroup) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

İmtahandan kəsilmisiniz. Toplamış olduğunuz bal 0 dan kiçikdir.`);
    }


    let secAzLimit = quesLimit - secAzTrue;
    if (secAzFalse > secAzLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let secEnLimit = quesLimit - secEnTrue;
    if (secEnFalse > secEnLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let secHisLimit = quesLimit - secHisTrue;
    if (secHisFalse > secHisLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let secGeoLimit = quesLimit - secGeoTrue;
    if (secGeoFalse > secGeoLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let secMathLimit = quesLimit - secMathTrue;
    if (secMathFalse > secMathLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;

    }


    if (isNaN(secAzTrue) || isNaN(secEnTrue) || isNaN(secHisTrue) || isNaN(secGeoTrue) || isNaN(secMathTrue) || isNaN(secAzFalse) || isNaN(secEnFalse) || isNaN(secHisFalse) || isNaN(secGeoFalse) || isNaN(secMathFalse)) {
        document.getElementById('result').innerHTML = 'Xəta! Girdiyiniz dəyər ədəd tipində olmalıdır';

    }
    else if (secAzTrue > quesLimit || secEnTrue > quesLimit || secHisTrue > quesLimit || secGeoTrue > quesLimit || secMathTrue > quesLimit || secAzFalse > quesLimit || secEnFalse > quesLimit || secHisFalse > quesLimit || secGeoFalse > quesLimit || secMathFalse > quesLimit) {
        document.getElementById('result').innerHTML = 'Xəta! Sual limiti 25 dən yüksək olmamalıdır';

    }
    else if (0 > secAzTrue || 0 > secEnTrue || 0 > secHisTrue || 0 > secGeoTrue || 0 > secMathTrue || 0 > secAzFalse || 0 > secEnFalse || 0 > secHisFalse || 0 > secGeoFalse || 0 > secMathFalse) {
        document.getElementById('result').innerHTML = 'Xəta! Girilən dəyər mənfi ədəd ola bilməz';

    }
    else if (secAzTrue == " " || secEnTrue == " " || secHisTrue == " " || secGeoTrue == " " || secMathTrue == " ") {
        document.getElementById('result').innerHTML = 'Xəta! Boş dəyər girmək olmaz';

    }
}

function cancul3() {
    let thiLitTrue = document.getElementById('thiLitTrue').value * 1;
    let thiEnTrue = document.getElementById('thiEnTrue').value * 1;
    let thiMathTrue = document.getElementById('thiMathTrue').value * 1;
    let thiAzTrue = document.getElementById('thiAzTrue').value * 1;
    let thiHisTrue = document.getElementById('thiHisTrue').value * 1;

    let thiLitFalse = document.getElementById('thiLitFalse').value * 1;
    let thiEnFalse = document.getElementById('thiEnFalse').value * 1;
    let thiMathFalse = document.getElementById('thiMathFalse').value * 1;
    let thiAzFalse = document.getElementById('thiAzFalse').value * 1;
    let thiHisFalse = document.getElementById('thiHisFalse').value * 1;


    let fir4True = thiLitTrue + thiEnTrue + thiMathTrue;
    let fir4False = thiLitFalse + thiEnFalse + thiMathFalse;
    let fir8True = thiAzTrue + thiHisTrue;
    let fir8False = thiAzFalse + thiHisFalse;

    //!  Canculate Four Points

    let canculFour = fir4True - (fir4False / 4);
    let resultFour = canculFour * 4;

    //!  Canculate Eight Points

    let canculEight = fir8True - (fir8False / 4);
    let resultEight = canculEight * 8;

    //! Result

    let resultAllGroup = resultFour + resultEight;



    if (resultAllGroup >= 0 && resultAllGroup <= 149) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}
        
Siz imtahandan kəsilmisiniz.`);
    }
    else if (resultAllGroup >= 150 && resultAllGroup <= 250) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan zəif nəticə toplamısınız

Nəticəniz: 'D'`);
    }
    else if (resultAllGroup >= 251 && resultAllGroup <= 400) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan orta nəticə toplamısınız.

Nəticəniz: 'C'`);
    }
    else if (resultAllGroup >= 401 && resultAllGroup <= 600) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan yüksək nəticə toplamısınız.

Nəticəniz: 'B'`);
    }
    else if (resultAllGroup >= 601 && resultAllGroup <= 699) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan əla nəticə toplamısınız.

Nəticəniz: 'A'`);
    }
    else if (resultAllGroup === 700) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}
      
Təbriklər! Siz imtahandan ən yüksək balı toplamısınız.

Nəticəniz: 'AA'`);
       
    }
    else if (0 > resultAllGroup) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

İmtahandan kəsilmisiniz. Toplamış olduğunuz bal 0 dan kiçikdir.`);
    }


    let thiLitLimit = quesLimit - thiLitTrue;
    if (thiLitFalse > thiLitLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let thiEnLimit = quesLimit - thiEnTrue;
    if (thiEnFalse > thiEnLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let thiMathLimit = quesLimit - thiMathTrue;
    if (thiMathFalse > thiMathLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let thiAzLimit = quesLimit - thiAzTrue;
    if (thiAzFalse > thiAzLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let thiHisLimit = quesLimit - thiHisTrue;
    if (thiHisFalse > thiHisLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;

    }


    if (isNaN(thiLitTrue) || isNaN(thiEnTrue) || isNaN(thiMathTrue) || isNaN(thiAzTrue) || isNaN(thiHisTrue) || isNaN(thiLitFalse) || isNaN(thiEnFalse) || isNaN(thiMathFalse) || isNaN(thiAzFalse) || isNaN(thiHisFalse)) {
        document.getElementById('result').innerHTML = 'Xəta! Girdiyiniz dəyər ədəd tipində olmalıdır';

    }
    else if (thiLitTrue > quesLimit || thiEnTrue > quesLimit || thiMathTrue > quesLimit || thiAzTrue > quesLimit || thiHisTrue > quesLimit || thiLitFalse > quesLimit || thiEnFalse > quesLimit || thiMathFalse > quesLimit || thiAzFalse > quesLimit || thiHisFalse > quesLimit) {
        document.getElementById('result').innerHTML = 'Xəta! Sual limiti 25 dən yüksək olmamalıdır';

    }
    else if (0 > thiLitTrue || 0 > thiEnTrue || 0 > thiMathTrue || 0 > thiAzTrue || 0 > thiHisTrue || 0 > thiLitFalse || 0 > thiEnFalse || 0 > thiMathFalse || 0 > thiAzFalse || 0 > thiHisFalse) {
        document.getElementById('result').innerHTML = 'Xəta! Girilən dəyər mənfi ədəd ola bilməz';

    }
    else if (thiLitTrue == " " || thiEnTrue == " " || thiMathTrue == " " || thiAzTrue == " " || thiHisTrue == " ") {
        document.getElementById('result').innerHTML = 'Xəta! Boş dəyər girmək olmaz';

    }
}

function cancul4() {
    let fourPhyTrue = document.getElementById('fourPhyTrue').value * 1;
    let fourAzTrue = document.getElementById('fourAzTrue').value * 1;
    let fourMathTrue = document.getElementById('fourMathTrue').value * 1;
    let fourChemTrue = document.getElementById('fourChemTrue').value * 1;
    let fourBioTrue = document.getElementById('fourBioTrue').value * 1;

    let fourPhyFalse = document.getElementById('fourPhyFalse').value * 1;
    let fourAzFalse = document.getElementById('fourAzFalse').value * 1;
    let fourMathFalse = document.getElementById('fourMathFalse').value * 1;
    let fourChemFalse = document.getElementById('fourChemFalse').value * 1;
    let fourBioFalse = document.getElementById('fourBioFalse').value * 1;


    let fir4True = fourPhyTrue + fourAzTrue + fourMathTrue;
    let fir4False = fourPhyFalse + fourAzFalse + fourMathFalse;
    let fir8True = fourChemTrue + fourBioTrue;
    let fir8False = fourChemFalse + fourBioFalse;

    //!  Canculate Four Points

    let canculFour = fir4True - (fir4False / 4);
    let resultFour = canculFour * 4;

    //!  Canculate Eight Points

    let canculEight = fir8True - (fir8False / 4);
    let resultEight = canculEight * 8;

    //! Result

    let resultAllGroup = resultFour + resultEight;



    if (resultAllGroup >= 0 && resultAllGroup <= 149) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}
        
Siz imtahandan kəsilmisiniz.`);
    }
    else if (resultAllGroup >= 150 && resultAllGroup <= 250) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan zəif nəticə toplamısınız

Nəticəniz: 'D'`);
    }
    else if (resultAllGroup >= 251 && resultAllGroup <= 400) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan orta nəticə toplamısınız.

Nəticəniz: 'C'`);
    }
    else if (resultAllGroup >= 401 && resultAllGroup <= 600) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan yüksək nəticə toplamısınız.

Nəticəniz: 'B'`);
    }
    else if (resultAllGroup >= 601 && resultAllGroup <= 699) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

Siz imtahandan əla nəticə toplamısınız.

Nəticəniz: 'A'`);
    }
    else if (resultAllGroup === 700) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}
      
Təbriklər! Siz imtahandan ən yüksək balı toplamısınız.

Nəticəniz: 'AA'`);
       
    }
    else if (0 > resultAllGroup) {
        document.getElementById('result').innerHTML = (`İmtahandan toplamış olduğunuz bal: ${resultAllGroup}

İmtahandan kəsilmisiniz. Toplamış olduğunuz bal 0 dan kiçikdir.`);
    }


    let fourPhyLimit = quesLimit - fourPhyTrue;
    if (fourPhyFalse > fourPhyLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let fourAzLimit = quesLimit - fourAzTrue;
    if (fourAzFalse > fourAzLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let fourMathLimit = quesLimit - fourMathTrue;
    if (fourMathFalse > fourMathLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let fourChemLimit = quesLimit - fourChemTrue;
    if (fourChemFalse > fourChemLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;
    }
    let fourBioLimit = quesLimit - fourBioTrue;
    if (fourBioFalse > fourBioLimit) {
        document.getElementById('result').innerHTML = `Xəta! Sual limiti 25 dən yüksək olmamalıdır`;

    }


    if (isNaN(fourPhyTrue) || isNaN(fourAzTrue) || isNaN(fourMathTrue) || isNaN(fourChemTrue) || isNaN(fourBioTrue) || isNaN(fourPhyFalse) || isNaN(fourAzFalse) || isNaN(fourMathFalse) || isNaN(fourChemFalse) || isNaN(fourBioFalse)) {
        document.getElementById('result').innerHTML = 'Xəta! Girdiyiniz dəyər ədəd tipində olmalıdır';

    }
    else if (fourPhyTrue > quesLimit || fourAzTrue > quesLimit || fourMathTrue > quesLimit || fourChemTrue > quesLimit || fourBioTrue > quesLimit || fourPhyFalse > quesLimit || fourAzFalse > quesLimit || fourMathFalse > quesLimit || fourChemFalse > quesLimit || fourBioFalse > quesLimit) {
        document.getElementById('result').innerHTML = 'Xəta! Sual limiti 25 dən yüksək olmamalıdır';

    }
    else if (0 > fourPhyTrue || 0 > fourAzTrue || 0 > fourMathTrue || 0 > fourChemTrue || 0 > fourBioTrue || 0 > fourPhyFalse || 0 > fourAzFalse || 0 > fourMathFalse || 0 > fourChemFalse || 0 > fourBioFalse) {
        document.getElementById('result').innerHTML = 'Xəta! Girilən dəyər mənfi ədəd ola bilməz';

    }
    else if (fourPhyTrue == " " || fourAzTrue == " " || fourMathTrue == " " || fourChemTrue == " " || fourBioTrue == " ") {
        document.getElementById('result').innerHTML = 'Xəta! Boş dəyər girmək olmaz';

    }
}


function backInfo1() {
    window.open('/subjectInfo/sub1Info.html');
}
function backInfo2() {
    window.open('/subjectInfo/sub2Info.html');
}
function backInfo3() {
    window.open('/subjectInfo/sub3Info.html');
}
function backInfo4() {
    window.open('/subjectInfo/sub4Info.html');
}

