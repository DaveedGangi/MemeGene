import {Component} from 'react'

import {
  DivContainer,
  ImageContainer,
  FontSize,
  LabelForFont,
  Heading,
  ButtonElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

// Write your code here

class MemeGenerator extends Component {
  state = {
    generate: false,
    inputImageValue: '',
    inputTopText: '',
    inputBottomText: '',
    fontSize: 8,
  }

  generateOn = event => {
    event.preventDefault()
    this.setState({generate: true})
  }

  givenInput = event => {
    this.setState({inputImageValue: event.target.value})
  }

  givenTopText = event => {
    this.setState({inputTopText: event.target.value})
  }

  givenBottomText = event => {
    this.setState({inputBottomText: event.target.value})
  }

  ChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {
      generate,
      inputImageValue,
      inputBottomText,
      inputTopText,
      fontSize,
    } = this.state
    console.log(generate)
    console.log(inputImageValue)
    console.log(inputBottomText)
    console.log(inputTopText)
    console.log(fontSize)

    const inputImages = inputImageValue.length
    console.log(inputImages)
    return (
      <DivContainer>
        <Heading>Meme Generator</Heading>
        <div>
          {generate ? (
            <ImageContainer
              data-testid="meme"
              const
              imageUrls={inputImageValue}
            >
              <FontSize const fontBold={fontSize}>
                <p>
                  {inputTopText.length === 0
                    ? 'I love to wake up early in the morning'
                    : inputTopText}
                </p>
                <p>
                  {inputBottomText.length === 0
                    ? 'Too see the morning scenery'
                    : inputBottomText}
                </p>
              </FontSize>
            </ImageContainer>
          ) : null}
        </div>

        <form onSubmit={this.generateOn}>
          <div>
            <label htmlFor="imageUrl">Image URL</label>
            <br />
            <input
              placeholder="Enter a image URL"
              onChange={this.givenInput}
              type="text"
              id="imageURL"
            />
            <br />
            <br />
            <label htmlFor="topText">Top Text</label>
            <br />
            <input
              placeholder="Enter a Top Text"
              onChange={this.givenTopText}
              type="text"
              id="topText"
            />
            <br />
            <br />
            <label htmlFor="bottomText">Bottom Text</label>
            <br />
            <input
              placeholder="Enter a Bottom Text"
              onChange={this.givenBottomText}
              type="text"
              id="bottomText"
            />
            <br />
            <br />

            <LabelForFont>
              <label htmlFor="fontSize">Font Size</label>
              <br />
              <select onClick={this.ChangeFontSize} id="fontSize">
                {fontSizesOptionsList.map(each => (
                  <option key={each.optionId}>{each.displayText}</option>
                ))}
              </select>
            </LabelForFont>

            <br />
            <ButtonElement type="submit">Generate</ButtonElement>
          </div>
        </form>
      </DivContainer>
    )
  }
}

export default MemeGenerator
