# Notepad
A notepad in a web page
---

A simple editable web page meant to be used as a quick notepad throughout the day. Saves text in Local Storage. I use it for my to-do list.

### Usage
* Go to [https://axelvaldez.github.io/notepad/](https://axelvaldez.github.io/notepad/) (I recommend setting it up as your browser's start page).
* Click Edit (or Ctrl + E)
* Type your stuff down
* Click Save (Ctrl + S)

That's it. In edit mode, you can use the following modifiers for text:

<table>
    <tr>
        <th>Modifier</th>
        <th>What it does</th>
    </tr>
    <tr>
        <td>&ast;Bold text&ast;</td>
        <td><strong>Bold text</strong></td>
    </tr>
    <tr>
        <td>&#95;Italicized text&#95;</td>
        <td><em>Italicized text</em></td>
    </tr>
    <tr>
        <td>!Highlighted text (to end of line)</td>
        <td><span style="background: #FEEB6B">Highlighted text (to end of line)</span></td>
    </tr>
    <tr>
        <td>--Strikethrough text (to end of line)</td>
        <td><span style="opacity: .25; text-decoration: line-through;">Strikethrough text (to end of line)</span></td>
    </tr>
</table>

Also, urls starting with http:// or https:// will become clickable links.

### Available actions in edit mode

*Save*
Saves the text input

*Cancel*
Discard changes and exits edit mode

*Clear*
Clear all the text. Triggers a confirmation dialog before doing so.