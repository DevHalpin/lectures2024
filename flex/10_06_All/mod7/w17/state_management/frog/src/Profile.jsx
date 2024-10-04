// Styles
import "./Profile.css";
import Button from "./components/Button";

// Components
import Tag from "./components/Tag";

export default function Profile(props) {
  const handleUpdateName = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    props.updateName(formData.get('name'))
  }

  const handleUpdateDescription = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    props.updateDescription(formData.get('description'))
  }

  const handleAddTag = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    props.addTag(formData.get('tag'))
  }

  return (
    <section>
      <div className="profile-picture">
        <img src={props.logo} alt={props.alt} />
      </div>
      <div className="profile-block">
        <h2>{props.name}</h2>
        <form method="PUT" className="text-field-form" onSubmit={handleUpdateName} >
          <input type="text" name="name" placeholder="Update your name" />
          <Button type="submit" loadingText={"Updating..."} loading={props.loading} >
            Update
          </Button>
        </form>
        <h3>Profile</h3>
        <p>{props.description}</p>
        <form method="PUT" className="text-field-form" onSubmit={handleUpdateDescription}>
          <input
            type="text"
            name="description"
            placeholder="Update your profile"
          />
          <Button type="submit" loadingText={"Updating..."} loading={props.loading}>
            Update
          </Button>
        </form>
        <h3>Tags</h3>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag.id}>
              <Tag onClose={() => props.removeTag(tag.id)}>{tag.label}</Tag>
            </li>
          ))}
        </ul>
        <form method="PUT" className="text-field-form" onSubmit={handleAddTag}>
          <input type="text" name="tag" placeholder="Add Tag" />
          <Button type="submit" loadingText={"Adding..."} loading={props.loading}>
            Add Tag
          </Button>
        </form>
      </div>
    </section>
  );
}