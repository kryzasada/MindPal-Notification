interface RequestDescriptionProps {
  description: {
    user: string
    company: string
    project: string
  }
}

interface StatusChangeDescriptionProps {
  description: string
}

interface NewFeatureDescriptionProps {
  description: {
    project: string
    name: string
  }
}

interface NotificationRowDescriptionProps {
  type: string
  description: RequestDescriptionProps | StatusChangeDescriptionProps | NewFeatureDescriptionProps
}


const NotificationRowDescription = ({ type, description }: NotificationRowDescriptionProps) => {
  const DescriptionComponent = descriptionComponentsMap[type]
  return <DescriptionComponent description={description} />
}

export default NotificationRowDescription


const RequestDescription = ({ description }: RequestDescriptionProps) => (
  <p>
    <b> {description.user} </b>
    from
    <b> {description.company} </b>
    has requested their project
    <b> {description.project} </b>
  </p>
)

const StatusChangeDescription = ({ description }: StatusChangeDescriptionProps) => <p>{description}</p>

const NewFeatureDescription = ({ description }: NewFeatureDescriptionProps) => (
  <p>
    New
    <b> {description.project} </b>
    feature:
    <b> {description.name} </b>
  </p>
)

const descriptionComponentsMap: { [key: string]: React.FC<any> } = {
  'Request': RequestDescription,
  'Status change': StatusChangeDescription,
  'New feature': NewFeatureDescription,
}