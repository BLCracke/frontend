import PagePlaceholder from '../components/ui/PagePlaceholder.jsx'

export default function NotFound() {
  return (
    <PagePlaceholder
      eyebrow="404"
      title="This page does not exist."
      description="The link you followed may be broken, or the page may have moved."
    />
  )
}
