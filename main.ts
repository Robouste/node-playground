class Test {
	public static parseCharacterName(content: string, characterName: string): string {
		const regex = /{{\s*char\s*}}/g;
		return content.replace(regex, characterName);
	}
}

const sample = "Hello, {{ char }}! How are you? {{char}}";

console.log(Test.parseCharacterName(sample, "John Doe"));
