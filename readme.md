<h1>Password Generator</h1>
<p>Open <a href="https://uxhawk.github.io/gw-hmwk-03-pw-gen/">Password Generator</a></p>
<img src="https://lh3.googleusercontent.com/CX1Y7AAJHfG7a0vcQjqoyJyBrvZAsCU8jk0Ea7aXXxnU2LQwn3OkHL9ViUDekrxk6xrZu6y2Q4wWeV9vR1R9RmJfetlz8odQs9LCVtRRftrP_gnB0hijnuRQH-nGhMqfU7y1s_mjrNWREdmo82JRiRlx3YGaQDAsxatxFOtBGKg0jSI3znb9OwjCRSrI3JDnYBkB41muN7uXo9Yw1BkQJ93Ms1D00nVHZV72KDW7PZvHw3A_ErGsZRqgcjJEMRHo1XqLc3Gy0kMqYBeqI6LEr5oIZgw78L8WU6nf8ZFMbBzNpGh2pQXps2nRawx-_uaHjpB_sKLN4sZG1iR0eqsj4zLlFI_-RCHdcpVZRGgbNpdCGuRm5RAztSohLaKXaDEPUwZD9ewC9q7hh3T1CvYjBnKKUvpc9R9ZvpvBpdfVRoBJ5adDdRIwub2FoP_LAkjeS9J704K8mTYR5k5T0_Y5Jy1JDDSTgRcoey19r_FgHQV_edz0Ubv0Bnh0jFe8to3nfcX4NPXgrSz5NBv2_PxMKQwg_bd5vIs8uoDU57M1OsMaNUNdwiKt7vFOUNFaMJ_qKZgSbGSP6C1xdXy7--w8eMTNbO-GAJfiIyYHImzSo0fJRjJesTTGQbQ2JkXOAC-a7TaGD6uFRb1Yo8pdP4Nvd1MI9g54LpofkJEgwrWChsYZJjFnC54reH5z9uIOQw=w880-h494-no"
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
