"use client";

import React, { useState } from "react";
import { Button, Input, Modal, Card } from "@dandurt/t1-component-library";
import { FaRocket } from "react-icons/fa";

export default function DemoPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
			<h1 style={{ marginBottom: "2rem" }}>Demo de Componentes</h1>

			<section>
				<h2>🟦 Botones</h2>
				<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
					<Button variant='primary' label='Primario' />
					<Button variant='secondary' label='Secundario' />
					<Button variant='danger' label='Eliminar' />
					<Button loading label='Cargando...' />
					<Button
						label='Lanzar'
						variant='primary'
						startIcon={<FaRocket style={{ marginRight: 8 }} />}
					/>
				</div>
			</section>

			<hr style={{ margin: "2rem 0" }} />
			<section>
				<h2>🔤 Inputs</h2>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<Input type='text' label='Nombre' placeholder='Tu nombre' />
					<Input type='email' label='Correo' placeholder='email@demo.com' />
					<Input type='password' label='Contraseña' placeholder='••••••' />
					<Input
						type='text'
						label='Con error'
						placeholder='Campo inválido'
						validation='error'
					/>
				</div>
			</section>

			<hr style={{ margin: "2rem 0" }} />
			<section>
				<h2>🪟 Modal</h2>
				<Button label='Abrir Modal' onClick={() => setIsModalOpen(true)} />
				<Modal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					title='Título del Modal'
					size='medium'>
					<p>Este es el contenido del modal.</p>
					<Button label='Cerrar' onClick={() => setIsModalOpen(false)} />
				</Modal>
			</section>

			<hr style={{ margin: "2rem 0" }} />
			<section>
				<h2>🧾 Card</h2>
				<Card
					variant='default'
					image='https://images.icon-icons.com/2415/PNG/512/typescript_original_logo_icon_146317.png'
					header={<h3>Card con imagen y header</h3>}
					footer={
						<Button
							variant='secondary'
							label='Ver más'
							style={{ width: "200px" }}
						/>
					}>
					<p>
						Contenido principal del componente <strong>Card</strong>.
					</p>
				</Card>
			</section>
		</main>
	);
}
