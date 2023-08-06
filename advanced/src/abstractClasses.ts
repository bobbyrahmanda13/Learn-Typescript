abstract class Command {
  abstract commandLine(): string
  execute() {
    console.log("Executing:", this.commandLine())
  }
}

// start error
// error => Non-abstract class 'GitResetCommand' does not implement all abstract members of 'Command'ts(18052) abstractClasses.ts(2, 12): i
// Non-abstract class 'GitResetCommand' does not implement inherited abstract member 'commandLine' from class 'Command'.

// code yang error adalah (GitResetCommand)
// class GitResetCommand extends Command { // }

// end Error
// lanjutkan contoh
class GitResetCommand extends Command {
  commandLine() {
    return "git reset --hard"
  }
}
class GitFetchCommand extends Command {
  commandLine() {
    return "git fetch --all"
  }
}
new GitResetCommand().execute()
new GitFetchCommand().execute()

new Command() // Error: Cannot create an instance of an abstract class
