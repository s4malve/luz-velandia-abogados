import Send from '../../components/Icons/Send'

type Props = {
  title: string
}

const Form = ({ title }: Props) => {
  return (
    <section className="content-container bg-section">
      <div className="grid w-11/12 max-w-3xl mx-auto gap-y-12">
        <h2 className="max-w-[554px]">{title}</h2>
        <form action="" className="grid gap-y-6">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(358px,1fr))]   justify-between gap-9">
            <label htmlFor="full-name" className="grid w-full gap-y-2">
              <span className="font-semibold"> Nombre Completo</span>
              <input
                type="text"
                name="full-name"
                id="full-name"
                placeholder="Nombre Completo"
              />
            </label>
            <label htmlFor="full-name" className="grid w-full gap-y-2">
              <span className="font-semibold"> Nombre Completo</span>
              <input
                type="text"
                name="full-name"
                id="full-name"
                placeholder="Nombre Completo"
              />
            </label>
          </div>
          <label htmlFor="full-name" className="grid w-full gap-y-2">
            <span className="font-semibold"> Nombre Completo</span>
            <textarea
              name="full-name"
              id="full-name"
              placeholder="Nombre Completo"
              rows={5}
            ></textarea>
          </label>
          <button type="submit" className="btn btn-primary btn-lg">
            <Send />
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  )
}

export default Form
