import { Rover } from "../../domain/entities/rover";
import { MoveHoversUseCase } from "../../domain/useCases/moverovers";
import { toMovement } from "../../factories/movement";
import { range } from "../../utils/utils";
import { RoversForm } from "../forms/roversform";

export function handle(form: RoversForm) {
    const useCase = new MoveHoversUseCase({
        "rovers": form.rovers.map(status => new Rover(status.heading, status.position)),
        "boundaries": form.boundaries
    })
    const commands = range(form.rovers.length).map((_, i)=> toMovement(form.commands[i]))
    commands.forEach((command, i) => useCase.moveRovers(command, i))

    return useCase.getStatus()
}
