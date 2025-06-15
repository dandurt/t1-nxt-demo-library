"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type ComponentStat = {
	_id: string;
	count: number;
};

export default function StatsPage() {
	const [stats, setStats] = useState<ComponentStat[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchStats = async () => {
		try {
			const res = await axios.get(
				"https://t1-msa-tracking.onrender.com/api/components/stats"
			);
			const ordered = res.data.sort((a: { _id: string }, b: { _id: string }) =>
				a._id.localeCompare(b._id)
			);
			setStats(ordered);
			setLoading(false);
		} catch (error) {
			console.error("Error al obtener estadísticas:", error);
		}
	};

	useEffect(() => {
		fetchStats();
		const interval = setInterval(fetchStats, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<main
			style={{
				padding: "3rem",
				maxWidth: "900px",
				margin: "0 auto",
				fontFamily: "'Segoe UI', sans-serif",
			}}>
			<h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
				📊 Estadísticas de Uso
			</h1>

			{loading ? (
				<p style={{ fontStyle: "italic" }}>Cargando estadísticas...</p>
			) : stats.length === 0 ? (
				<p>No hay datos aún.</p>
			) : (
				<div
					style={{
						border: "1px solid #ddd",
						borderRadius: "8px",
						overflow: "hidden",
						boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
					}}>
					<table
						style={{
							width: "100%",
							borderCollapse: "collapse",
							textAlign: "left",
						}}>
						<thead
							style={{
								backgroundColor: "#f0f4f8",
								borderBottom: "2px solid #ccc",
							}}>
							<tr>
								<th style={{ padding: "1rem", fontWeight: 600 }}>
									🧩 Componente
								</th>
								<th style={{ padding: "1rem", fontWeight: 600 }}>📈 Usos</th>
							</tr>
						</thead>
						<tbody>
							{stats.map((stat) => (
								<tr
									key={stat._id}
									style={{
										borderBottom: "1px solid #eee",
										backgroundColor: "#fff",
									}}>
									<td style={{ padding: "1rem" }}>{stat._id}</td>
									<td
										style={{
											padding: "1rem",
											fontWeight: "bold",
											color: "#1e88e5",
										}}>
										{stat.count}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</main>
	);
}
