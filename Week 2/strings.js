// definition
let singleQuoteString = "Hello";
let doubleQuoteString = "World";
let templateLiteralString = `Hello World`;

// character access
let firstCharacter = singleQuoteString[0];
let secondCharacter = doubleQuoteString.charAt(1);

// immutability [غير قابل للتعديل]

singleQuoteString[0] = "O";

/**
 * Common methods
 * length
 * concat
 * indexOf / lastIndexOf
 * slice
 * toUpperCase / toLowerCase
 * trim / trimStart / trimEnd
 * split
 * replace / replaceAll
 * includes
 * startsWith / endsWith
 * substring
 * charAt
 */

// length
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = text.length;
    // console.log(length);
}

// slice
{
    // slice not including the indexEnd
    let text = "Apple, Banana, Kiwi";
    let part = text.slice(7, 13);
    // console.log(part);
}

{
    let text = "Apple, Banana, Kiwi";
    let part = text.slice(7);
    // console.log(part);
}

{
    let text = "Apple, Banana, Kiwi";
    let part = text.slice(-12);
    // console.log(part);
}

{
    let text = "Apple, Banana, Kiwi";
    let part = text.slice(-12, -6);
    // console.log(part);
}

// substring
{
    let str = "Apple, Banana, Kiwi";
    let part = str.substring(7, 13);
    // console.log(part);
}

// replace
{
    let text = "Please visit Microsoft!";
    let newText = text.replace("Microsoft", "Google");
    // console.log(newText);
}
{
    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace("Microsoft", "Google");
    // console.log(newText);
}

// replaceAll
{
    let text =
        "I love cats. Cats are very easy to love. Cats are very popular.";
    text = text.replaceAll("Cats", "Dogs");
    text = text.replaceAll("cats", "dogs");
    // console.log(text);
}

// toUpperCase
{
    let text1 = "Hello World!";
    let text2 = text1.toUpperCase();
    // console.log(text2);
}

// toLowerCase
{
    let text1 = "Hello World!";
    let text2 = text1.toLowerCase();
    // console.log(text2);
}

// concat
{
    let text = "";
    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);
    text = "Hello" + " " + "World!";
    text = "Hello".concat(" ", "World!");
    // console.log(text3);
    // console.log(text);
}

// trim
{
    let text1 = "      Hello World!      ";
    let text2 = text1.trim();
    // console.log(text2);
}

// trimStart
{
    let text1 = "     Hello World!     ";
    let text2 = text1.trimStart();
    // console.log(text2);
}

// trimEnd
{
    let text1 = "     Hello World!     ";
    let text2 = text1.trimEnd();
    // console.log(text2);
}

// split
{
    let text = "a,b,c,d,e,f";
    const myArray1 = text.split(",");
    const myArray2 = text.split("");
    // console.log(myArray1);
    // console.log(myArray2);
}

// includes
{
    const sentence = "The quick brown fox jumps over the lazy dog.";
    const word = "fox";
    // console.log(
    //     `The word "${word}" ${
    //         sentence.includes(word) ? "is" : "is not"
    //     } in the sentence`
    // );
}
{
    const sentence = "The quick brown fox jumps over the lazy dog.";
    const word = "FOX";
    // console.log(
    //     `The word "${word}" ${
    //         sentence.toLocaleLowerCase().includes(word.toLocaleLowerCase())
    //             ? "is"
    //             : "is not"
    //     } in the sentence`
    // );
}

// indexOf
{
    const str = "Brave new world";

    // console.log(str.indexOf("w"));
    // console.log(str.indexOf("new"));
}

{
    // occurrences of a letter in a string
    const str = "To be, or not to be, that is the question.";
    let count = 0;
    let position = str.indexOf("e");

    while (position !== -1) {
        count++;
        position = str.indexOf("e", position + 1);
    }

    console.log(count);
}

// lastIndexOf
{
    const anyString = "Brave, Brave New World";

    console.log(anyString.indexOf("Brave"));
    console.log(anyString.lastIndexOf("Brave"));
}

/**
 * Exercise: Usernames from Email Addresses
 * result should not contain spaces
 * emails should contain @ at if not log warning about that emails
 */
{
    const emails = [
        "user1@example.com",
        "hello.world@domain.com    ",
        "test123@test.net",
    ];

    // Output should be ["user1", "hello.world", "test123"]
}

/**
 * Exercise: Encode and Decode a String
 * Encode Function:
 * 1- Takes a string as input.
 * 2- Encodes the string by duplicating each character.
 * The first character is not duplicated, the second is duplicated once, the third is duplicated twice, and so on.
 * 3- Returns the encoded string.
 */

{
    let string = "Hello";
    // encoding output 'Heelllllooooo'
}
