import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { PromptCommandInterface } from './ui';


const rl = readline.createInterface({ input, output });

const ui = new PromptCommandInterface(rl)
ui.execute()
