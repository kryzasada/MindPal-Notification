import "./CollapsiblePanel.sass"

const CollapsiblePanel = ({
  children
}: CollapsiblePanelProps) => {
  return (
    <div className="collapsible-panel">
      {children}
    </div>
  )
}

export default CollapsiblePanel

interface CollapsiblePanelProps {
  children: JSX.Element
}