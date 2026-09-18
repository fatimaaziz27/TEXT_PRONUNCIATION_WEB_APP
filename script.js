function speak(){
    speechSynthesis.speak(
        new SpeechSynthesisUtterance(text.value)
    )
}