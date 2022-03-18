import { useState } from "react"
import { Tag } from "react-tag-input"
import styled from "styled-components"
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown"
import Button from "../components/Button/Button"
import ImageUpload from "../components/ImageUpload"
import Input from "../components/Input/Input"
import MarkdownEditor from "../components/MarkdownEditor"
import TagInput from "../components/TagInput"
import WordPriceCounter from "../components/WordPriceCounter"


export default function PostForm () {
  const [tags, setTags] = useState<Tag[]>([])
  const [body, setBody] = useState('')

  return <PostFormWrapper>
    <Input 
      label="Título"
      placeholder="Como fiquei rico aprendendo React"
    />

    <ImageUpload label="Thumbnail do post"/>

    <MarkdownEditor onChange={setBody}/>

    <TagInput 
      placeholder="Insira as tags deste post"
      tags={tags}
      onAdd={tag => setTags([...tags, tag])}
      onDelete={index => setTags(tags.filter((t, i) => i !== index))}      
    />

    <PostFormSubmitWrapper>
      <WordPriceCounter 
        wordsCount={countWordsInMarkdown(body)} 
        pricePerWord={0.25}
      />
      <Button variant="primary" label="salvar post" type="submit"/>
    </PostFormSubmitWrapper>
  </PostFormWrapper>
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const PostFormSubmitWrapper = styled.form`
  display: flex;
  justify-content: space-between;
`