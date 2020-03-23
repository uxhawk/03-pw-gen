<h1>Password Generator</h1>
<p><a href="https://uxhawk.github.io/class-activities/week-03/homework/index.html">Generate Passwords</a></p>
<img src="https://lh3.googleusercontent.com/y7lK9puwXyWjPUMoL4HUcLr_sVJ8cENKP4WOQbgO-g_AINDGjFXa6C89CkPb4ak_2809uEDgJs-0qra9ke6cTX2heGuzHM7Ssgdo_94gOGUkvo1sg5TnBGr56_AbfYOmrNiFfrvjyIVGoItU3_eZOpw_r3dvIKu4dVnAbAmsbpwHNBvlmUmEc21aDPvmFVa5Wkh1OQfCU9vULc2XAnDmmPjZ_zUpu33RkOSQOfJaSqVT8Pd8yUXE83m9BvJ0geheDJS8jmuZudPEdvoTq0J-2OEzap1aBsm6li6jj_0l-BYGDn6ZLUN8AvhfODlWLTptjfkElMbokJ2ML-OrPukJPr2G9iLspHisPiKpx7PAwlmjUGpqymV9Xpqala4tkT6qIcIfLp4H7y5TQzAGethAEG-ipU24u4lGiTpmvqZEVHu9HjO8v_Zwz6q_IDtbdX479EPqv6zI_H1zNxgHmFSBes2Dtpr9YpUknix5K83_Sm7CWztVF2AkKC92-l3tbfWxwTFJ1eh48s6y95Q8Rtl2FzuUMYDAWCmr-bqfryODNJ0qd1bQynMTj5xuWcQUchGeP6osU1IKOw64OQRTf7JXdZpzoL6I7ES1KrW7LUa-O_7EQNG72I2iTCZY9rsTm5NaU3_INsRim3XE1EMge1QHkK-bSBLoffWfZBQhphpjWqTj6h3ft1NTEZk=w880-h494-no"
    alt="Screenshot of the password generator">

<h2>How to Use</h2>
<p>You can generate a password by responding to a series of prompts. In the prompts, click OK to include a character
    type (e.g., uppercase letters), or click cancel to exclude those from the password.</p>

<h2>The Code</h2>
<p>Character types are set to a boolean following the browser prompt. Any character type set to <code>true</code> will
    be added to a string variable called <code>availableChars</code>. For example:</p>
<ul>
    <li>
        <code>if (uppercase === true), availableChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"</code>
    </li>
    <li><code>if (specialCharacters === true && upperCase === true), availableChars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-_=+{}\|;:',<.>/?"</code></li>
</ul>

<p>From the string of <code>availableChars</code> e.g., "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-_=+{}\|;:',<.>/?", the
        password generator randomly select characters from <code>availableChars</code> and adds them to the password. It
        is possible that the program will by chance only select uppercase letters, even though the user opted to
        include special characters.</p> 
        <p> To resolve this problem, any character type set to <code>true</code> will create a
        <code>guranteed</code> variable. These guaranteed variables, set to random values of a given character type,
        will be added
        to the password string after the program randomly selects options from <code>availableChars</code>. </p>